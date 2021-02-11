import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppearanceProvider, Appearance } from "react-native-appearance";

import useCachedResources from "./app/hooks/useCachedResources";
import { ThemeProvider } from "./app/hooks/useThemeContext";
import Toolbar from "./app/components/Toolbar";
import Navigation from "./app/navigation";
import OverlayUserGuide from "./app/screens/OverlayUserGuide";
import OverlaySupported from "./app/screens/OverlaySupported";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppearanceProvider>
          <ThemeProvider>
            <OverlaySupported />
            <OverlayUserGuide />
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
