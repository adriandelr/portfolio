import React, { useState } from "react";
import {
  ActivityIndicator,
  View,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";

import { useTheme } from "../hooks/useThemeContext";
import Styles from "../constants/Styles";
import Layout from "../constants/Layout";

import Linker from "../components/Linker";
import { Avatar, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function TabDevScreen({ navigation }: any) {
  const { colors } = useTheme(),
    [isLoaded, setIsLoaded] = useState(false),
    expoAppStoreURL = "https://apps.apple.com/ph/app/expo-client/id982107779",
    expoPlayStoreURL =
      "https://play.google.com/store/apps/details?id=host.exp.exponent",
    expoURL = "exp://exp.host/@adriandelr/Portfolio";

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 3,
        backgroundColor: "transparent",
      }}
    >
      <View
        style={{
          width: 25,
          height: 25,
          position: "absolute",
          top: 15,
          left: 15,
          zIndex: 1,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
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
      </View>

      <ScrollView
        style={{
          paddingTop: Platform.OS === "web" ? 50 : 0,
        }}
      >
        <View
          style={{
            paddingBottom: Platform.OS === "web" ? 77 : 33,
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
            animating={!isLoaded}
          />
          <Avatar
            size={192}
            rounded
            title="AD"
            activeOpacity={0.7}
            titleStyle={{
              color: colors.textAvatar,
              marginTop:
                Platform.OS === "web" ? (Layout.isSmallDevice ? 0 : -17) : -7,
            }}
            containerStyle={{
              marginTop: 30,
              marginBottom: 50,
              backgroundColor: colors.backgroundAvatar,
            }}
          />
          <Image
            source={require("../assets/images/az-logo.png")}
            onLoadEnd={() => {
              setIsLoaded(true);
            }}
            style={{
              display: "none",
              width: 192,
              height: 192,
              marginTop: 30,
              marginBottom: 50,
              opacity: 0.7,
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
              style={[
                Styles.novaFamily,
                {
                  color: colors.text,
                  fontWeight: "300",
                },
              ]}
            >
              Adrian Del Rosario
            </Text>
          )}
          <Text
            style={[
              Styles.novaFamily,
              {
                color: colors.error,
                fontSize: 17,
                fontWeight: "300",
              },
            ]}
          >
            Cross-Platform Digital Portfolio
          </Text>

          <Text
            style={[
              Styles.novaFamily,
              {
                color: colors.text,
                fontSize: 14,
                marginTop: 40,
                paddingHorizontal: Layout.isSmallDevice
                  ? Layout.isSmallerDevice
                    ? "19%"
                    : "13%"
                  : "27%",
              },
            ]}
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
          {Platform.OS === "web" && (
            <Text
              style={[
                Styles.novaFamily,
                {
                  color: colors.text,
                  fontSize: 14,
                  marginTop: 40,
                  marginBottom: 20,
                  paddingHorizontal: Layout.isSmallDevice
                    ? Layout.isSmallerDevice
                      ? "19%"
                      : "13%"
                    : "27%",
                },
              ]}
            >
              {
                "You are viewing on the web. For a more native experience, download the Expo app."
              }
              <Icon
                name="app-store"
                size={21}
                color={colors.primary}
                style={{ paddingLeft: 7 }}
                solid
              />
              <Icon
                name="google-play"
                size={21}
                color={colors.primary}
                style={{ paddingLeft: 7 }}
                solid
              />
            </Text>
          )}
          {Platform.OS === "web" && (
            <Linker url={expoAppStoreURL} text="Apple Store" color="#D3D3D3" />
          )}
          {Platform.OS === "web" && (
            <Linker url={expoPlayStoreURL} text="Play Store" color="#D3D3D3" />
          )}
          {Platform.OS === "web" && (
            <Text
              style={[
                Styles.novaFamily,
                {
                  color: colors.text,
                  fontSize: 14,
                  marginTop: 30,
                  marginBottom: 20,
                  paddingHorizontal: Layout.isSmallDevice
                    ? Layout.isSmallerDevice
                      ? "19%"
                      : "13%"
                    : "27%",
                },
              ]}
            >
              {
                "If you have the Expo client already, you may open my app through this link."
              }
            </Text>
          )}
          {Platform.OS === "web" && (
            <Linker
              url={expoURL}
              text="Portfolio App"
              color="#D3D3D3"
              confirmText="Are you sure you have installed the Expo client?"
              cancelText="Please download the Expo client."
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}
