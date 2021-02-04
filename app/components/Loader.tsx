import React from "react";
import { ActivityIndicator } from "react-native";

import { useTheme } from "../hooks/useThemeContext";

const Loader = () => {
  const { colors } = useTheme();

  return (
    <ActivityIndicator size={21} color={colors.primary} animating={true} />
  );
};

export default Loader;
