import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainLink from "../../assets/icon/mainLink";
import BasketLink from "../../assets/icon/basketLink";
import { Tabs, usePathname } from "expo-router";
import { Colors } from "../../shared/tokens";
import { Text } from "react-native";
import BackButton from "../../shared/BackButton/BackButton";

export default function TabLayout() {
  const pathName = usePathname();

  const colorStyleStatusBar = () => {
    if (pathName === "/" || pathName === "/catalog") {
      return "light";
    }
    return "dark";
  };

  const headerTitle = pathName !== "/catalog";

  const pathSection =
    pathName === "/cart" || pathName === "/address" || pathName === "/success";

  const catalogActiveTab = !pathSection ? Colors.orange : Colors.grey;

  const cartActiveTab = pathSection ? Colors.orange : Colors.grey;

  return (
    <SafeAreaProvider style={{ backgroundColor: Colors.whiteBackground }}>
      <StatusBar style={colorStyleStatusBar()} />
      <Tabs
        screenOptions={{
          headerShown: headerTitle,
          headerStyle: {
            backgroundColor: Colors.whiteBackground,
            // backgroundColor: "red",
            shadowColor: Colors.whiteBackground,
            height: 55
          },
          headerLeft: () => {
            return <BackButton />;
          },
          tabBarStyle: {
            height: 100,
            borderTopStartRadius: 24,
            borderTopEndRadius: 24,
            backgroundColor: Colors.white,
            paddingTop: 16,
          },
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: {
            paddingLeft: 8,
            alignItems: "center",
          },
        }}
      >
        <Tabs.Screen
          name="catalog"
          options={{
            title: "Главная",
            tabBarIcon: () => {
              return <MainLink iconColor={catalogActiveTab} />;
            },
            tabBarLabel: () => {
              return <Text style={{ color: catalogActiveTab }}>Главная</Text>;
            },
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Заказ",
            tabBarIcon: () => {
              return <BasketLink iconColor={cartActiveTab} />;
            },
            tabBarLabel: () => {
              return <Text style={{ color: cartActiveTab }}>Заказ</Text>;
            },
          }}
        />
        <Tabs.Screen
          name="address"
          options={{
            href: null,
          }}
        />

        <Tabs.Screen
          name="success"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
