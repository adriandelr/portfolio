import React, { useState } from "react";
import { ActivityIndicator, Platform } from "react-native";

import { useTheme } from "../hooks/useThemeContext";
import Layout from "../constants/Layout";

const Loader = () => {
  const { colors } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 900);

  return (
    <ActivityIndicator
      style={{
        position: "absolute",
        top: Layout.isSmallDevice ? (Platform.OS === "web" ? 14 : 7) : 50,
        right: Layout.isSmallDevice ? (Platform.OS === "web" ? 28 : 7) : 50,
        zIndex: 1,
      }}
      size={21}
      color={colors.primary}
      animating={!isLoaded}
    />
  );
};

export default Loader;
