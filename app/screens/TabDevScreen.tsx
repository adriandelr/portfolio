import React, { useState } from "react";
import {
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
import QRCode from "react-qr-code";

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
                fontSize: Platform.OS === "web" ? 14 : 15,
                marginTop: 40,
                paddingHorizontal: Layout.isSmallDevice
                  ? Layout.isSmallerDevice
                    ? "19%"
                    : "17%"
                  : "27%",
              },
            ]}
          >
            Adrian is a Web Developer focused on developing Cross-Platform
            applications using Front-End technologies.
            {"\n"}
            {"\n"}
            He has been delivering various solutions, ranging from UI and
            Animation, to communication, computation, and modulation of data,
            and content for the past six (6) years.
            {"\n"}
            {"\n"}
            Recently, he handled projects as a UI Hybrid Mobile Developer for a
            US based client Tollway Group, supported Accenture's Business
            Development for a Hong Kong based Housing Provider, and facilitated
            a two (2) day bootcamp course on AngularJS for new recruits.
            {"\n"}
            {"\n"}
            Furthermore, he has developed Hybrid Mobile Applications for HMC's
            world class loyalty solutions. Providing services to luxury five (5)
            star hotels, and brands.
          </Text>
          {Platform.OS === "web" && (
            <View style={{ width: "100%", alignItems: "center" }}>
              <Text
                style={[
                  Styles.novaFamily,
                  {
                    color: colors.text,
                    fontSize: Platform.OS === "web" ? 14 : 15,
                    marginTop: 40,
                    marginBottom: 20,
                    paddingHorizontal: Layout.isSmallDevice
                      ? Layout.isSmallerDevice
                        ? "19%"
                        : "17%"
                      : "27%",
                  },
                ]}
              >
                {
                  "You are on web view. For an awesome native experience, download the Expo app."
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
              <Linker url={expoAppStoreURL} text="Apple Store" />
              <Linker url={expoPlayStoreURL} text="Play Store" />
              <Text
                style={[
                  Styles.novaFamily,
                  {
                    color: colors.text,
                    fontSize: Platform.OS === "web" ? 14 : 15,
                    marginTop: 30,
                    marginBottom: 20,
                    paddingHorizontal: Layout.isSmallDevice
                      ? Layout.isSmallerDevice
                        ? "19%"
                        : "17%"
                      : "27%",
                  },
                ]}
              >
                {
                  "If you have Expo installed, you may open this app through the link, or scan the code."
                }
              </Text>
              <Linker
                url={expoURL}
                text="Portfolio App"
                confirmText="Are you sure you have installed the Expo client?"
                cancelText="Please download the Expo client."
              />
              <View
                style={{
                  marginTop: 21,
                }}
              >
                <QRCode
                  value="exp://exp.host/@adriandelr/Portfolio"
                  size={137}
                  bgColor={colors.background}
                  fgColor={colors.primary}
                  level="M"
                />
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
