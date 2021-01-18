import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { RootStackParamList } from "../types";

import { useTheme } from "../hooks/useThemeContext";
import { Text, Image, colors as elementsColor } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "NotFound">) {
  const { colors } = useTheme();

  const elemStyles = {
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    linkText: {
      fontSize: 14,
      color: "#2e78b7",
    },
  };

  return (
    <View style={styles.container}>
      {/* <Text style={elemStyles.title}>This screen doesn't exist.</Text> */}
      <Icon
        name="hard-hat"
        size={30}
        color={colors.text}
        style={{ marginTop: 50 }}
      />
      <Text h4>Nothing is here.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace("Root")}
        style={styles.link}
      >
        <Text style={elemStyles.linkText}>Let's go home.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
