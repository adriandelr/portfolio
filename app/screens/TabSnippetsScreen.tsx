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
import Linker from "../components/Linker";
import Layout from "../constants/Layout";

import Icon from "react-native-vector-icons/FontAwesome5";
import Markdown from "react-native-markdown-display";

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
          title: "Methodology",
          content: `
**Agile** is a general approach to project management, whereas **scrum** is just one of the **different** ways to practice **agile**.

**Agile** is a set of guiding principles and ideals, but it doesn't say how exactly those values should be implemented.

**Scrum** is a framework that provides specific rules for getting things done.
          `,
        },
        {
          title: "Common Definitions",
          content: `
**Markdown** is a markup language that formats plain text. The formatted text is then converted into another language, such as HTML.
          `,
        },
      ],
    },
    {
      title: "Windows",
      data: [
        {
          title: "Productivity Tools",
          content: `
Apps
  + Atom
  + VSCode
          `,
        },
      ],
    },
    {
      title: "Mac",
      data: [
        {
          title: "Productivity Tools",
          content: `
Apps
  + The Unarchiver
  + Forklift
  + PandaPow
  + Alpha Channel Remover
          `,
        },
        {
          title: "Show Hidden Files",
          content: `
**Shortcut**
> Toggle "CMD + Shift + ."

**Command**
To show all hidden files and folders, that start with a ‘.’ , back to Terminal in OSX 10.9 Mavericks:
\`\`\`
defaults write com.apple.finder AppleShowAllFiles -boolean true; killall Finder
\`\`\`

Getting back to cleanliness:
\`\`\`
defaults write com.apple.finder AppleShowAllFiles -boolean false; killall Finder
\`\`\`
          `,
        },
      ],
    },
    {
      title: "HTML",
      data: [
        {
          title:
            "HTML5 Basics For Everyone Tired Of Reading About Deprecated Code",
          content:
            "HyperText Markup Language, is the language used for web documents. It is not a programming language, but rather a language that identifies the meaning, purpose, and structure of text within a document.",
          link: "https://html.com/html5/",
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
          title: "What is React Native?",
          content: "Content...",
        },
        {
          title: "Platform Packages",
          content: `
Notable Packages
- Expo
- React Native Appearance
- React Native Elements
- React Native Reanimated
- React Native Gesture Handler
- React Native Safe Area Context
- React Native Vector Icons
- React Native Toggle
- React Native Markdown Display
- React Native Tailwind
          `,
        },
        {
          title: "React Native Dark Mode Done Right!",
          content:
            "A dead-simple approach to theming and dark mode in react native.",
          link:
            "https://medium.com/@ratebseirawan/react-native-dark-mode-done-right-13f83b39a4ca",
        },
      ],
    },
    {
      title: "Ionic",
      data: [
        {
          title: "What is Ionic?",
          content: `
- Built using HTML, JS ,CSS, and Angular, recently on React
- Code once, deploy everywhere
- Free and open source
- Built on top of Cordova
- Could be fast as native app
          `,
        },
        {
          title: "Platform Packages",
          content: "Content...",
        },
      ],
    },
    {
      title: "Links",
      data: [
        {
          title: "Lorem Ipsum",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          link: "https://www.lipsum.com/",
        },
        {
          title: "Lorem Picsum",
          content: "The Lorem Ipsum for photos.",
          link: "https://picsum.photos/",
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
        {open && <Markdown style={mdStyles}>{snipItem.content}</Markdown>}
        {open && snipItem.link && (
          <Linker url={snipItem.link} text="View Source" color={colors.link} />
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
  });

  const mdStyles = StyleSheet.create({
    body: {
      width: "100%",
      paddingBottom: 7,
      color: colors.text,
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
      />
    </View>
  );
}
