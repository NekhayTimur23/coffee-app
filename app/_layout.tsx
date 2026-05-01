import { SplashScreen, Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Colors } from "../shared/tokens";

// SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const pathName = usePathname();
  const insets = useSafeAreaInsets();
  const [loaded] = useFonts({
    SoraRegular: require("../assets/fonts/Sora-Regular.ttf"),
    SoraSemiBold: require("../assets/fonts/Sora-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 500);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const colorBackground = () => {
    if (pathName === "/catalog" || pathName === "/") {
      return Colors.black;
    }

    return Colors.whiteBackground;
  };

 

  return (
    <SafeAreaProvider>
      <StatusBar style='light' />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colorBackground(),
            paddingTop: insets.top,
          },
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </SafeAreaProvider>
  );
}
