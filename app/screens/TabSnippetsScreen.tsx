import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

import { useTheme } from "../hooks/useThemeContext";
import Layout from "../constants/Layout";

import Icon from "react-native-vector-icons/FontAwesome5";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function TabSnippetsScreen() {
  const { colors } = useTheme();

  const SNIPPETS: any = [
    {
      title: "General",
      data: [
        {
          title: "Agile and Scrum",
          content:
            "Agile is a general approach to project management, whereas scrum is just one of the different ways to practice agile. Agile is a set of guiding principles and ideals, but it doesn't say how exactly those values should be implemented. Scrum is a framework that provides specific rules for getting things done.",
        },
        {
          title: "Productivity Tools",
          content: "Content...",
        },
        {
          title: "Work References",
          content: "Content...",
        },
      ],
    },
    {
      title: "HTML",
      data: [
        {
          title:
            "HTML5 Basics For Everyone Tired Of Reading About Deprecated Code",
          content: "Content...",
        },
      ],
    },
    {
      title: "JavaScript",
      data: [
        {
          title: "Variable Shadowing",
          content: "Content...",
        },
      ],
    },
    {
      title: "CSS",
      data: [
        {
          title: "Common Screen Resolution",
          content:
            "Website Dimensions: These Are The Most Common Screen Resolutions To Design For",
          link: "https://www.designrush.com/trends/website-dimensions",
        },
      ],
    },
    {
      title: "React Native",
      data: [
        {
          title: "React",
          content: "React Native Dark Mode Done Right!",
          link:
            "https://medium.com/@ratebseirawan/react-native-dark-mode-done-right-13f83b39a4ca",
        },
        {
          title: "Platform Packages",
          content: "Content...",
        },
      ],
    },
    {
      title: "Ionic",
      data: [
        {
          title: "Ionic",
          content: "Content...",
        },
        {
          title: "Platform Packages",
          content: "Content...",
        },
      ],
    },
  ];

  function Item({ snipItem }: any) {
    const [open, setOpen] = useState(false);

    const toggleAccordion = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setOpen(!open);
    };

    return (
      <TouchableOpacity
        style={[
          styles.item,
          !open && { height: Platform.OS === "web" ? 33 : 44 },
        ]}
        onPress={toggleAccordion}
        activeOpacity={1}
      >
        <Text
          style={[styles.title, { paddingVertical: open ? 3 : 0 }]}
          numberOfLines={open ? 0 : 1}
        >
          {snipItem.title}
        </Text>
        <Icon
          name="chevron-left"
          style={{
            fontSize: Platform.OS === "web" ? 11 : 14,
            color: colors.error,
            position: "absolute",
            top: Platform.OS === "web" ? 10 : 14,
            right: Platform.OS === "web" ? 10 : 14,
            alignSelf: "flex-end",
            justifyContent: "center",
            transform: open ? [{ rotate: "-90deg" }] : [{ rotate: "0deg" }],
            opacity: open ? 0.7 : 0.9,
          }}
        />
        {open && (
          <View>
            <Text style={styles.content}>{snipItem.content}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 3,
    },
    section: {
      paddingHorizontal:
        Platform.OS === "web" ? (Layout.isSmallDevice ? "7%" : "21%") : 47,
      paddingBottom: 7,
    },
    header: {
      fontSize: 17,
      color: colors.error,
      marginTop: 20,
    },
    item: {
      width: "100%",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingLeft: 7,
      paddingRight: 37,
      marginTop: 7,
      marginBottom: 13,
      borderWidth: 1,
      borderColor: colors.snipBorder,
      overflow: "hidden",
      backgroundColor: colors.snipItemBackground,
    },
    title: {
      fontSize: Platform.OS === "web" ? 15 : 15,
      color: colors.textSnipTitle,
      fontWeight: Platform.OS === "web" ? "normal" : "300",
    },
    content: {
      fontSize: 14,
      color: colors.textSnipContent,
      paddingBottom: 3,
    },
  });

  return (
    <View style={styles.container}>
      <SectionList
        sections={SNIPPETS}
        keyExtractor={(item, index): any => String(index)}
        renderItem={({ item }) => <Item snipItem={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        style={styles.section}
        showsVerticalScrollIndicator={Platform.OS === "web" ? false : true}
      />
    </View>
  );
}
