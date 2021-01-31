import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { PROJECTS } from "../constants/Projects";
import Layout from "../constants/Layout";
import { useTheme } from "../hooks/useThemeContext";
/*
// @ts-ignore */
import Carousel, { PaginationLight } from "react-native-x2-carousel";

const DATA = [
  {
    coverImageUri:
      "https://user-images.githubusercontent.com/6414178/73920321-2357b680-4900-11ea-89d5-2e8cbecec9f6.jpg",
    cornerLabelColor: "#FFD300",
    cornerLabelText: "GOTY",
  },
  {
    coverImageUri:
      "https://user-images.githubusercontent.com/6414178/73920358-336f9600-4900-11ea-8eec-cc919b991e90.jpg",
    cornerLabelColor: "#0080ff",
    cornerLabelText: "NEW",
  },
  {
    coverImageUri:
      "https://user-images.githubusercontent.com/6414178/73927874-25744200-490d-11ea-940f-db3e5dbd8b2b.jpg",
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "-75%",
  },
  {
    coverImageUri:
      "https://user-images.githubusercontent.com/6414178/73920399-45e9cf80-4900-11ea-9d5b-743fe5e8b9a4.jpg",
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "-20%",
  },
];

const Xcarousel = ({ sectionId, itemId }: any) => {
  const { colors } = useTheme();
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
        // data={PROJECTS[sectionId].data[itemId].images}
        data={DATA}
        renderItem={renderItem}
        loop
        autoplay
        autoplayInterval={5000}
        pagination={PaginationLight}
      />
    </View>
  );
};

export default Xcarousel;
