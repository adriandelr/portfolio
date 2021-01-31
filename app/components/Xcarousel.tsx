import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { PROJECTS } from "../constants/Projects";
import Layout from "../constants/Layout";
import { useTheme } from "../hooks/useThemeContext";
/*
// @ts-ignore */
import Carousel, { PaginationLight } from "react-native-x2-carousel";

const Xcarousel = ({ sectionId, itemId }: any) => {
  const { colors } = useTheme();
  const images = PROJECTS[sectionId].data[itemId].images;

  const renderItem = (data: any) => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={{ uri: data.coverImageUri }} />
        <View
          style={[
            styles.cornerLabel,
            { backgroundColor: data.cornerLabelColor },
          ]}
        >
          <Text style={styles.cornerLabelText}>{data.cornerLabelText}</Text>
        </View>
      </View>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    cardContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    cardWrapper: {
      borderRadius: 8,
      overflow: "hidden",
    },
    card: {
      width: Layout.window.width * 0.9,
      height: Layout.window.width * 0.5,
    },
    cornerLabel: {
      position: "absolute",
      bottom: 0,
      right: 0,
      borderTopLeftRadius: 8,
    },
    cornerLabelText: {
      fontSize: 12,
      color: "#fff",
      fontWeight: "600",
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 2,
      paddingBottom: 2,
    },
  });

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        loop
        autoplay
        autoplayInterval={3000}
        pagination={images.length > 1 ? PaginationLight : null}
      />
    </View>
  );
};

export default Xcarousel;
