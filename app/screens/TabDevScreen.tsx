import * as React from "react";
import { Platform } from "react-native";
import { ActivityIndicator, StyleSheet } from "react-native";

// import EditScreenInfo from "../components/EditScreenInfo";
import { View } from "../components/Themed";

// import { Appearance, useColorScheme } from "react-native-appearance";

import { useTheme } from "../components/ThemeContext";
import { Text, Image, colors as elementsColor } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function TabDevScreen() {
  const { setScheme, colors, isDark } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      /*
       * the colors.background value will change dynamicly with
       * so if we wanna change its value we can go directly to the pallet
       * this will make super easy to change and maintain mid or end project
       */
      backgroundColor: colors.background,
    },
  });

  const elemStyles = {
    title: {
      color: colors.text,
    },
    desc: {
      color: colors.text,
      paddingTop: 20,
      paddingLeft: Platform.OS === "web" ? "10%" : "7%",
      paddingRight: Platform.OS === "web" ? "10%" : "7%",
    },
    error: {
      color: colors.error,
    },
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/az-logo.png")}
        style={{ width: 200, height: 200, marginBottom: 70 }}
        PlaceholderContent={
          <ActivityIndicator
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.background,
            }}
            animating={true}
            color={colors.primary}
          />
        }
      />
      <Text h2 style={elemStyles.title}>
        Adrian del Rosario
      </Text>
      <Text h4 style={elemStyles.error}>
        Cross-Platform Digital Portfolio
      </Text>

      <Text style={elemStyles.desc} numberOfLines={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
        feugiat ligula, et pretium dolor. Integer vel mollis mauris. Donec
        maximus tristique condimentum. Quisque posuere augue non luctus posuere.
      </Text>
      <View
        style={{
          backgroundColor: colors.background,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 40,
        }}
      ></View>
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.title}>Tab One</Text>
  //     <View
  //       style={styles.separator}
  //       lightColor="#eee"
  //       darkColor="rgba(255,255,255,0.1)"
  //     />

  //     <Switch value={isDark} onValueChange={toggleScheme} />

  //     <EditScreenInfo path="/screens/TabOneScreen.tsx" />
  //   </View>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },
// });
