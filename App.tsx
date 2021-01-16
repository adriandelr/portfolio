// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./app/hooks/useCachedResources";
// import useColorScheme from "./app/hooks/useColorScheme";
import Toolbar from "./app/components/Toolbar";
import Navigation from "./app/navigation";

import { AppearanceProvider, Appearance } from "react-native-appearance";

import { ThemeProvider } from "./app/components/ThemeContext";

import WelcomeOverlay from "./app/screens/WelcomeOverlay";

export default function App() {
  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppearanceProvider>
          <ThemeProvider>
            <WelcomeOverlay />
            <Toolbar />
            <Navigation
              colorScheme={
                Appearance.getColorScheme() === "dark" ? "dark" : "light"
              }
            />
            <StatusBar />
          </ThemeProvider>
        </AppearanceProvider>
      </SafeAreaProvider>
    );
  }
}
