import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { useFonts } from "expo-font";
import { useEffect } from "react";

// SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
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

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#000",
            paddingTop: insets.top,
            
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="catalog" />
      </Stack>
    </SafeAreaProvider>
  );
}
