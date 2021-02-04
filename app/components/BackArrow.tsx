import React from "react";
import { Platform, View, TouchableOpacity } from "react-native";

import { useTheme } from "../hooks/useThemeContext";

import { Icon } from "react-native-elements";

export var isShowButton: boolean = false;
export var scrollOffset: number = 0;
export const computeShowButton = (event: any) => {
  const layoutMeasurementHeight = event.nativeEvent.layoutMeasurement.height,
    contentOffsetY = event.nativeEvent.contentOffset.y,
    contentSizeHeight = event.nativeEvent.contentSize.height,
    offset = contentSizeHeight / 7,
    direction =
      contentOffsetY > 0 && contentOffsetY >= scrollOffset ? "down" : "up",
    isUp = direction === "up",
    isDown = direction === "down",
    isEnd =
      layoutMeasurementHeight + contentOffsetY >= contentSizeHeight - offset;
  if (isUp && contentOffsetY < offset) isShowButton = false;
  if (isDown && isEnd) isShowButton = true;
  scrollOffset = contentOffsetY;
};

export const BackArrow = ({ listRef }: any) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        position: "absolute",
        right: Platform.OS === "web" ? 49 : 19,
        bottom: Platform.OS === "web" ? 49 : 59,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          listRef.current?.scrollToLocation({
            itemIndex: 0,
            sectionIndex: 0,
            animated: true,
          });
        }}
      >
        <Icon
          name="arrow-up"
          type="font-awesome-5"
          color={colors.backArrow}
          style={{
            width: 44,
            height: 44,
            fontSize: 33,
          }}
          reverse
        />
      </TouchableOpacity>
    </View>
  );
};
