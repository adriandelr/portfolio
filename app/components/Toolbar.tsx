import * as React from "react";
import { Platform, StyleSheet, View, Switch } from "react-native";

import { Appearance, useColorScheme } from "react-native-appearance";

import { useTheme } from "../hooks/useThemeContext";
import { Text, colors as elementsColor } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Toolbar() {
  const { setScheme, colors, isDark } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 45,
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "flex-end",
      flexWrap: "wrap",
      backgroundColor: colors.navBackground,
      padding: 15,
      paddingTop: Platform.OS === "ios" ? 70 : 10,
      paddingBottom: Platform.OS === "ios" ? 30 : 10,
    },
  });

  const elemStyles = {
    title: {
      color: colors.text,
    },
    error: {
      color: colors.error,
    },
  };

  const toggleScheme = () => {
    /*
     * setScheme will change the state of the context
     * thus will cause childrens inside the context provider to re-render
     * with the new color scheme
     */
    isDark ? setScheme("light") : setScheme("dark");
  };

  return (
    <View style={styles.container}>
      <Icon
        name="cloud-moon"
        size={20}
        color={colors.primary}
        style={{ marginRight: 7 }}
        solid
      />
      <Switch
        value={isDark}
        onValueChange={toggleScheme}
        thumbColor={colors.error}
      />
    </View>
  );
}
