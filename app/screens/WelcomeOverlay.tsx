import React, { useState, useRef, useEffect } from "react";
import {
  Animated,
  Easing,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Text, Overlay } from "react-native-elements";

import Modal from "modal-react-native-web";

import { useTheme } from "../components/ThemeContext";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function WelcomeOverlay() {
  const { setScheme, colors, isDark } = useTheme();

  const [visible, setVisible] = useState(true);

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
        zIndex: 1,
        elevation: 1,
      }}
    >
      <TouchableOpacity onPress={toggleOverlay}>
        <Icon
          name="info-circle"
          size={21}
          color={colors.primary}
          style={{ paddingLeft: 7 }}
          solid
        />
      </TouchableOpacity>

      <Overlay
        ModalComponent={Platform.OS === "web" ? Modal : undefined}
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{
          // backgroundColor: "transparent",
          opacity: 0.7,
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
              style={{
                color: colors.primary,
                fontSize: 27,
                position: "absolute",
                top: "30%",
                flex: 1,
                alignSelf: "center",
                fontWeight: "700",
              }}
            >
              User Guide
            </Text>
            <View
              style={{
                position: "absolute",
                top: 50,
                left: 0,
                flex: 1,
                alignItems: "flex-start",
              }}
            >
              <Icon
                name="long-arrow-alt-up"
                size={37}
                color={colors.primary}
                style={{ marginLeft: 7 }}
                solid
              />
              <Text style={{ color: colors.primary, fontSize: 17 }}>
                Toggle Guide
              </Text>
            </View>

            <View
              style={{
                position: "absolute",
                top: 50,
                right: 10,
                flex: 1,
                alignItems: "center",
              }}
            >
              <Icon
                name="long-arrow-alt-up"
                size={37}
                color={colors.primary}
                style={{ marginLeft: 7 }}
                solid
              />
              <Text style={{ color: colors.primary, fontSize: 17 }}>
                Dark Mode
              </Text>
            </View>

            <View
              style={{
                marginLeft: "3%",
              }}
            >
              <SwipeFadeAnim>
                <Icon
                  name="hand-point-up"
                  size={37}
                  color={colors.primary}
                  style={{ marginLeft: 7 }}
                  solid
                />
              </SwipeFadeAnim>
              <Text
                style={{
                  color: colors.primary,
                  fontSize: 17,
                  marginLeft: 15,
                }}
              >
                Swipe to open drawer
              </Text>
            </View>

            <View
              style={{
                position: "absolute",
                top: "70%",
                right: "7%",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <SwipeFadeAnim direction="left">
                <Icon
                  name="hand-point-up"
                  size={37}
                  color={colors.primary}
                  style={{ marginLeft: 7 }}
                  solid
                />
              </SwipeFadeAnim>
              <Text
                style={{
                  color: colors.primary,
                  fontSize: 17,
                }}
              >
                Swipe to move between pages
              </Text>
            </View>

            <View
              style={{
                position: "absolute",
                bottom: 50,
                right: 10,
                flex: 1,
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.primary, fontSize: 17 }}>
                Tabs Navigation
              </Text>
              <Icon
                name="long-arrow-alt-down"
                size={37}
                color={colors.primary}
                style={{ marginLeft: 7 }}
                solid
              />
            </View>
          </View>
        </TouchableOpacity>
      </Overlay>
    </View>
  );
}
