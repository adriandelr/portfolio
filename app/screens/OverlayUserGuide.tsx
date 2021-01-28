import React, { useState, useRef, useEffect } from "react";
import {
  Animated,
  Easing,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";

import { useTheme } from "../hooks/useThemeContext";
import Styles from "../constants/Styles";
import Layout from "../constants/Layout";

import { Text, Overlay } from "react-native-elements";
import Modal from "modal-react-native-web";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function WelcomeOverlay() {
  const { setScheme, colors, isDark } = useTheme();

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const SwipeFadeAnim = (props: any) => {
    const fadeStartValue = useRef(new Animated.Value(1)).current;
    const fadeEndValue = 0;
    const fadeDuration = 900;

    const swipeStartValue = useRef(new Animated.Value(0)).current;
    let swipeEndValue = props.direction == "left" ? -173 : 173;
    const swipeDuration = 700;

    const iterations = 1000;
    const delay = 3000;

    useEffect(() => {
      function animate() {
        Animated.timing(fadeStartValue, {
          useNativeDriver: true,
          isInteraction: false,
          toValue: fadeEndValue,
          duration: fadeDuration,
          easing: Easing.linear,
        }).start(() => {
          setTimeout(() => {
            fadeStartValue.setValue(1);
          }, fadeDuration);
        });
        Animated.timing(swipeStartValue, {
          useNativeDriver: true,
          isInteraction: false,
          toValue: swipeEndValue,
          duration: swipeDuration,
          easing: Easing.linear,
        }).start(() => {
          setTimeout(() => {
            swipeStartValue.setValue(0);
          }, swipeDuration);
        });
      }

      let looper: (i: number) => void = (i: number) => {
        setTimeout(() => {
          if (visible) animate();
          if (--i) {
            looper(i);
          }
        }, delay);
      };

      looper(iterations);
    }, [
      fadeStartValue,
      fadeEndValue,
      fadeDuration,
      swipeStartValue,
      swipeEndValue,
      swipeDuration,
    ]);

    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeStartValue, // Bind opacity to animated value
          transform: [
            {
              translateX: swipeStartValue,
            },
          ],
        }}
      >
        {props.children}
      </Animated.View>
    );
  };

  Modal.setAppElement("body");

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        padding: 11,
        width: visible ? "100%" : undefined,
        height: visible ? "100%" : undefined,
        zIndex: 1,
        elevation: 1,
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      <TouchableOpacity
        onPress={toggleOverlay}
        style={{
          flexDirection: "row",
          top: Platform.OS === "ios" ? 50 : 0,
        }}
      >
        <Icon
          name="info-circle"
          size={21}
          color={colors.primary}
          style={{ paddingLeft: 9 }}
          solid
        />
        {!visible && (
          <Text
            style={[
              Styles.novaFamily,
              {
                color: colors.primary,
                fontSize: 13,
                alignSelf: "center",
                fontWeight: "700",
                marginLeft: 7,
              },
            ]}
          >
            User Guide
          </Text>
        )}
      </TouchableOpacity>

      <Overlay
        ModalComponent={Platform.OS === "web" ? Modal : undefined}
        isVisible={visible}
        // onBackdropPress={toggleOverlay}
        overlayStyle={{
          backgroundColor: "transparent",
          opacity: 1,
          elevation: 0,
          shadowOpacity: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <TouchableOpacity
          onPress={toggleOverlay}
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              alignItems: "flex-start",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Text
              style={[
                Styles.novaFamily,
                {
                  color: colors.textGuide,
                  fontSize: 23,
                  position: "absolute",
                  top: Layout.isSmallDevice
                    ? Layout.isSmallerDevice
                      ? "37%"
                      : "37%"
                    : "30%",
                  flex: 1,
                  alignSelf: "center",
                  fontWeight: "700",
                },
              ]}
            >
              Quick User Guide
            </Text>
            <Text
              style={[
                Styles.novaFamily,
                {
                  color: colors.textGuide,
                  fontSize: 13,
                  position: "absolute",
                  top: Layout.isSmallDevice
                    ? Layout.isSmallerDevice
                      ? "41%"
                      : "39%"
                    : "29%",
                  flex: 1,
                  alignSelf: "center",
                  fontWeight: "300",
                  padding: "7%",
                  textAlign: "center",
                },
              ]}
            >
              Tap anywhere to dismiss.
            </Text>
            <Text
              style={[
                Styles.novaFamily,
                {
                  color: colors.textGuide,
                  fontSize: 13,
                  position: "absolute",
                  top: Layout.isSmallDevice
                    ? Layout.isSmallerDevice
                      ? "45%"
                      : "43%"
                    : "35%",
                  flex: 1,
                  alignSelf: "center",
                  fontWeight: "300",
                  padding: "7%",
                  textAlign: "center",
                },
              ]}
            >
              Have a look on the features, navigations, and gestures.
            </Text>
            <View
              style={{
                position: "absolute",
                top: Layout.isSmallDevice ? 30 : 10,
                left: Layout.isSmallDevice ? 40 : 40,
                flex: 1,
                alignItems: "flex-start",
              }}
            >
              <Icon
                name="long-arrow-alt-up"
                size={37}
                color={colors.textGuide}
                style={{ marginLeft: 7, transform: [{ rotate: "-37deg" }] }}
                solid
              />
              <Text
                style={[
                  Styles.novaFamily,
                  { color: colors.textGuide, fontSize: 13 },
                ]}
              >
                Toggle Guide
              </Text>
            </View>

            {Platform.OS === "web" && (
              <View
                style={{
                  position: "absolute",
                  top: Layout.isSmallDevice
                    ? Platform.OS === "web"
                      ? 50
                      : 48
                    : 124,
                  left: Platform.OS === "web" ? 5 : 3,
                  flex: 1,
                  alignItems: "flex-start",
                }}
              >
                <Icon
                  name="bars"
                  size={21}
                  color={colors.primary}
                  style={{ paddingLeft: 7 }}
                  solid
                />
                <Icon
                  name="long-arrow-alt-up"
                  size={37}
                  color={colors.textGuide}
                  style={{ marginLeft: 7, transform: [{ rotate: "-7deg" }] }}
                  solid
                />
                <Text
                  style={[
                    Styles.novaFamily,
                    {
                      color: colors.textGuide,
                      fontSize: 13,
                      width: Layout.isSmallerDevice ? "73%" : "30%",
                    },
                  ]}
                >
                  Toggle Side Menu on the first page
                </Text>
              </View>
            )}

            <View
              style={{
                position: "absolute",
                top: 10,
                right: 60,
                flex: 1,
                alignItems: "center",
              }}
            >
              <Icon
                name="long-arrow-alt-up"
                size={37}
                color={colors.textGuide}
                style={{ marginLeft: 7, transform: [{ rotate: "73deg" }] }}
                solid
              />
              <Text
                style={[
                  Styles.novaFamily,
                  { color: colors.textGuide, fontSize: 13 },
                ]}
              >
                Toggle Dark Mode
              </Text>
            </View>

            {Platform.OS !== "web" && (
              <View
                style={{
                  marginTop: "37%",
                  marginLeft: "3%",
                }}
              >
                <Text
                  style={[
                    Styles.novaFamily,
                    {
                      color: colors.textGuide,
                      fontSize: 13,
                      marginLeft: 15,
                    },
                  ]}
                >
                  Swipe right till you open the icon menu
                </Text>
                <SwipeFadeAnim>
                  <Icon
                    name="hand-point-up"
                    size={37}
                    color={colors.textGuide}
                    style={{ marginLeft: 7 }}
                    solid
                  />
                </SwipeFadeAnim>
              </View>
            )}

            {Platform.OS !== "web" && (
              <View
                style={{
                  position: "absolute",
                  top: "70%",
                  right: "7%",
                  flex: 1,
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={[
                    Styles.novaFamily,
                    {
                      color: colors.textGuide,
                      fontSize: 13,
                    },
                  ]}
                >
                  Swipe to move between pages
                </Text>
                <SwipeFadeAnim direction="left">
                  <Icon
                    name="hand-point-up"
                    size={37}
                    color={colors.textGuide}
                    style={{ marginLeft: 7 }}
                    solid
                  />
                </SwipeFadeAnim>
              </View>
            )}

            {!Layout.isSmallDevice && (
              <View
                style={{
                  position: "absolute",
                  top: 90,
                  marginLeft: Layout.isSmallDevice
                    ? Layout.isSmallerDevice
                      ? 210
                      : 300
                    : 370,
                  flex: 1,
                  alignItems: "flex-start",
                  alignSelf: "center",
                }}
              >
                <Icon
                  name="long-arrow-alt-up"
                  size={37}
                  color={colors.textGuide}
                  style={{ marginLeft: 7, transform: [{ rotate: "-37deg" }] }}
                  solid
                />
                <Text
                  style={[
                    Styles.novaFamily,
                    { color: colors.textGuide, fontSize: 13 },
                  ]}
                >
                  Tabs to navigate between pages
                </Text>
              </View>
            )}

            {Layout.isSmallDevice && (
              <View
                style={{
                  position: "absolute",
                  bottom: 50,
                  flex: 1,
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={[
                    Styles.novaFamily,
                    { color: colors.textGuide, fontSize: 13 },
                  ]}
                >
                  Tabs to navigate between pages
                </Text>
                <Icon
                  name="long-arrow-alt-down"
                  size={37}
                  color={colors.textGuide}
                  style={{ marginLeft: 7 }}
                  solid
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
      </Overlay>
      {visible && (
        <View
          style={{
            backgroundColor: colors.background,
            opacity: 0.97,
            position: "absolute",
            top: Layout.isSmallDevice ? 45 : 120,
            left: 0,
            width: Layout.window.width,
            height: Layout.isSmallDevice ? "87.3%" : "100%",
          }}
        ></View>
      )}
    </View>
  );
}
