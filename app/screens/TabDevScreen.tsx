import React, { useState } from "react";
import { Platform, TouchableOpacity } from "react-native";
import { ActivityIndicator, View, ScrollView, Image } from "react-native";

import { useTheme } from "../hooks/useThemeContext";
import { Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function TabDevScreen({ navigation }: any) {
  const { colors } = useTheme();

  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
        style={{
          position: "absolute",
          top: Platform.OS === "web" ? 15 : 13,
          left: Platform.OS === "web" ? 15 : 13,
        }}
      >
        <Icon
          name="bars"
          size={21}
          color={colors.primary}
          style={{ paddingLeft: 7 }}
          solid
        />
      </TouchableOpacity>

      <ScrollView
        style={{
          top: 50,
        }}
      >
        <View
          style={{
            paddingBottom: 117,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.background,
          }}
        >
          <ActivityIndicator
            style={{
              display: "none",
              top: 140,
            }}
            size={21}
            color={colors.primary}
            animating={isLoaded}
          />
          <Image
            source={require("../assets/images/az-logo.png")}
            onLoadEnd={() => {
              setIsLoaded(false);
            }}
            style={{
              width: 192,
              height: 192,
              marginTop: 30,
              marginBottom: 50,
            }}
          />
          {Platform.OS === "web" && (
            <Text
              h4
              style={{
                color: colors.text,
                fontWeight: "700",
              }}
            >
              Adrian Del Rosario
            </Text>
          )}
          {Platform.OS !== "web" && (
            <Text
              h3
              style={{
                color: colors.text,
                fontWeight: "300",
              }}
            >
              Adrian Del Rosario
            </Text>
          )}
          <Text
            style={{
              color: colors.error,
              fontSize: 17,
              fontWeight: "300",
            }}
          >
            Cross-Platform Digital Portfolio
          </Text>

          <Text
            style={{
              color: colors.text,
              fontSize: 14,
              marginTop: 40,
              paddingLeft: Platform.OS === "web" ? "10%" : "13%",
              paddingRight: Platform.OS === "web" ? "10%" : "13%",
            }}
            numberOfLines={0}
          >
            Adrian is a Web Developer focused on developing Web Applications
            using Front-end Web Technologies.
            {"\n"}
            {"\n"}
            He has been delivering various applications ranging from UI and
            Animation to communication, computation, and manipulation of queries
            and content for the last seven (7) years.
            {"\n"}
            {"\n"}
            He handled projects before as a UI Hybrid Mobile Developer for US
            based Toll Agency and supported Accenture’s Business Development for
            a Hong Kong based Housing Agency with the same role.
            {"\n"}
            {"\n"}
            Recently, he worked on a project for a Global Law Firm based in the
            US using Angular2 in maintaining their records, and continued
            developing Mobile Applications for a Global Loyalty Solutions
            Provider catering big 5* Star Hotel Clients such as Hilton,
            MarcoPolo, ClubHotel, and more.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
