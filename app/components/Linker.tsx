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

export default function Linker({
  url,
  text,
  color,
  confirmText,
  cancelText,
}: any) {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    btnLink: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: 170,
      height: 37,
      backgroundColor: colors.error,
      marginTop: 17,
      elevation: 8,
      borderRadius: 3,
      paddingVertical: 7,
      paddingHorizontal: 13,
    },
    btnLinkText: {
      color: colors.background,
      fontSize: 13,
      fontWeight: Platform.OS === "web" ? "300" : "700",
    },
  });

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
    <TouchableOpacity
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
      style={styles.btnLink}
    >
      <Text style={styles.btnLinkText}>{text}</Text>
    </TouchableOpacity>
  );
}
