import React, { useCallback } from "react";
import {
  Alert,
  Platform,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";

import { useTheme } from "../hooks/useThemeContext";

import { Button } from "react-native-elements";

export default function Linker({
  url,
  text,
  color,
  confirmText,
  cancelText,
}: any) {
  const { colors } = useTheme();

  const openLink = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      if (Platform.OS == "web") {
        window.open(url, "_blank");
      } else {
        await Linking.openURL(url);
      }
    } else {
      Alert.alert(`Invalid URL: ${url}`);
    }
  }, [url]);

  return (
    <Button
      onPress={() => {
        if (confirmText && cancelText) {
          if (confirm(confirmText)) {
            openLink();
          } else {
            alert(cancelText);
          }
        } else {
          openLink();
        }
      }}
      titleStyle={{
        fontSize: 13,
        color: colors.background,
        fontWeight: Platform.OS === "web" ? "normal" : "300",
      }}
      buttonStyle={{
        alignItems: "center",
        justifyContent: "center",
        width: 170,
        height: 37,
        backgroundColor: colors.error,
        marginTop: 3,
        marginBottom: 13,
        elevation: 0.3,
        borderRadius: 3,
        paddingVertical: 7,
        paddingHorizontal: 13,
      }}
      title={text}
      type="solid"
    />
  );
}
