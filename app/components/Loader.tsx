import React, { useState } from "react";
import { ActivityIndicator, Platform } from "react-native";

import { useTheme } from "../hooks/useThemeContext";
import Layout from "../constants/Layout";

const Loader = () => {
  const { colors } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 700);

  return (
    <ActivityIndicator size={21} color={colors.primary} animating={!isLoaded} />
  );
};

export default Loader;
