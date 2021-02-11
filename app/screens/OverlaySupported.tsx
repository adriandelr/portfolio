import React from "react";
import { Text, View, Platform } from "react-native";

import { Overlay } from "react-native-elements";
import Modal from "modal-react-native-web";
import { isSafari } from "react-device-detect";

export default function OverlaySupported() {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        padding: 11,
        width: isSafari ? "100%" : undefined,
        height: isSafari ? "100%" : undefined,
        zIndex: 1,
        elevation: 1,
        flexDirection: "row",
        overflow: "hidden",
      }}
      pointerEvents="none"
    >
      <Overlay
        ModalComponent={Platform.OS === "web" ? Modal : undefined}
        isVisible={isSafari}
        overlayStyle={{
          backgroundColor: "transparent",
          opacity: 1,
          elevation: 0,
          shadowOpacity: 0,
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 21, color: "white" }} selectable={false}>
          This browser is not supported.
        </Text>
      </Overlay>
    </View>
  );
}
