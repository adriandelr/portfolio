import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SectionList,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

import { useTheme } from "../hooks/useThemeContext";
import Linker from "../components/Linker";
import Styles from "../constants/Styles";
import Layout from "../constants/Layout";

import _ from "lodash";
import Icon from "react-native-vector-icons/FontAwesome5";
import Markdown from "react-native-markdown-display";
import { Input } from "react-native-elements";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

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
        title: "Lodash",
        content:
          "A modern JavaScript utility library delivering modularity, performance & extras.",
        link: "https://lodash.com/",
      },
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
        title: "Flexbox Malven",
        content: "A simple visual cheatsheet for flexbox",
        link: "https://flexbox.malven.co/",
      },
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
- React Native UI Lib
- React Native Image Viewier
- React Native Snap Carousel
- React Native Vector Icons
- React Native InAppBrowser
- React Native Toggle
- React Native Markdown Display
- React Native Tailwind
- React NativeBase
- React Paper
        `,
      },
      {
        title: "The 5 React Native Component Libraries You Should Know in 2018",
        content:
          "Until 2018 we have much many different design pattern and component for React Native but on all of the list, I think this 5 case very important to learn and use in your app.",
        link:
          "https://medium.com/@aras.emami/the-5-react-native-component-libraries-you-should-know-in-2018-f0520d7eb99f",
      },
      {
        title: "React Native Dark Mode Done Right!",
        content:
          "A dead-simple approach to theming and dark mode in react native.",
        link:
          "https://medium.com/@ratebseirawan/react-native-dark-mode-done-right-13f83b39a4ca",
      },
      {
        title: "10 Awesome React Native UI Component Libraries You Should Know",
        content:
          "With the increase in the demand for mobile applications, a large number of enterprises are shifting their focus towards mobile app development. Introduction of new technologies, platforms, and frameworks is allowing mobile app developers to create revolutionary mobile apps. Cross-Platform App Development has gained a lot of popularity in recent times as it enables developers to develop apps for multiple platforms like Android, iOS, Windows with a single code base.",
        link:
          "https://medium.com/javascript-in-plain-english/10-awesome-react-native-ui-component-libraries-you-should-know-cd3296d99c0b",
      },
      {
        title:
          "Creating an embedded browser with React-Native using react-native-webview",
        content:
          "In this tutorial, I will show you how to add an embedded browser into your RN mobile app, just like facebook does in their app.",
        link:
          "https://medium.com/codesight/creating-an-embedded-browser-with-react-native-aea42b54740",
      },
      {
        title: "React Native Carousel",
        content:
          "In this piece, I am going to build a beautiful and effective carousel on React Native. If you don’t know what is Carousel, it is a dynamic scrolling list of elements in horizontal order, where the previous and next elements are partially visible.",
        link:
          "https://medium.com/javascript-in-plain-english/react-native-carousel-4df6db1c3303",
      },
      {
        title:
          "React-native-snap-carousel not compatible with React Native Web causing TypeError",
        content:
          "Getting the error TypeError: Cannot read property 'style' of undefined when running expo web. I think it’s to do with ViewPropTypes being deprecated. How can I fix this for web? I’m currently using Expo and React Native.",
        link:
          "https://forums.expo.io/t/react-native-snap-carousel-not-compatible-with-react-native-web-causing-typeerror/45131",
      },
      {
        title: "Will React Classes Get Deprecated Because of Hooks?",
        content:
          "React Hooks are a complete and better replacement for Classes. Will React Classes stay with us much longer?",
        link:
          "https://blog.bitsrc.io/will-react-classes-get-deprecated-because-of-hooks-bb62938ac1f5",
      },
      {
        title: "How to typescript react native list refs",
        content:
          "VirtualLists (i.e. SectionList, FlatList) have always been dificult for me to describe in typescript, but the following seems to work.",
        link:
          "https://til.hashrocket.com/posts/cgukffdr1n-how-to-typescript-react-native-list-refs",
      },
      {
        title: "Automatic Versioning for React Native Apps",
        content: "You need to update your app's version to 1.0.0.",
        link:
          "https://dev.to/osamaqarem/automatic-versioning-for-react-native-apps-2bf3",
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
      {
        title: "RapidTables",
        content: "Need a conversion?",
        link: "https://www.rapidtables.com/",
      },
      {
        title: "npm trends",
        content: "Compare package download counts over time.",
        link: "https://www.npmtrends.com/",
      },
    ],
  },
];

export default function TabSnippetsScreen() {
  const { colors } = useTheme();

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
          style={[
            Styles.novaFamily,
            styles.title,
            { paddingVertical: open ? 3 : 0 },
          ]}
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
            opacity: open ? 0.3 : 0.7,
          }}
        />
        {open && <Markdown style={mdStyles}>{snipItem.content}</Markdown>}
        {open && snipItem.link && (
          <Linker url={snipItem.link} text="View Source" color={colors.link} />
        )}
      </TouchableOpacity>
    );
  }

  const filterByKeyword = (query: string, items: any) => {
    let foundItems: any = [];

    // Filter each items by query containing keyword
    _.filter(items, (i: any, k) => {
      (i.title &&
        _.some(query.toLowerCase().split(" "), (q) =>
          _.includes(i.title.toLowerCase(), q)
        )) ||
      (i.content &&
        _.some(query.toLowerCase().split(" "), (q) =>
          _.includes(i.content.toLowerCase(), q)
        )) ||
      (i.link &&
        _.some(query.toLowerCase().split(" "), (q) =>
          _.includes(i.link.toLowerCase(), q)
        ))
        ? foundItems.push(k)
        : null;
    });

    // Return array with indexes of matched items
    return foundItems;
  };

  const [query, setQuery] = useState("");
  const filterSection = (query: any) => {
    const filteredSection: any = [];
    _.forEach(SNIPPETS, (section, index) => {
      filteredSection.push(filterByKeyword(query, section.data));
    });
    const filteredSnippets: any = [];
    _.forEach(filteredSection, (sections, sectionsIndex) => {
      if (!_.isEmpty(sections)) {
        _.forEach(sections, (section) => {
          filteredSnippets.push(SNIPPETS[sectionsIndex].data[section]);
        });
      }
    });
    return filteredSnippets;
  };

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
      borderColor: colors.borderSnip,
      overflow: "hidden",
      backgroundColor: colors.backgroundSnipItem,
    },
    title: {
      fontSize: Platform.OS === "web" ? 15 : 15,
      color: colors.textSnipTitle,
      fontWeight: Platform.OS === "web" ? "normal" : "300",
    },
    keywordContainer: {
      height: 77,
      marginTop: 7,
      paddingHorizontal:
        Platform.OS === "web" ? (Layout.isSmallDevice ? "3%" : "19%") : 7,
    },
  });

  const mdStyles = StyleSheet.create({
    body: {
      width: "100%",
      paddingBottom: 7,
      color: colors.text,
      fontFamily: "proxima-regular",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.keywordContainer}>
        <Input
          label="Keyword"
          placeholder="Search"
          placeholderTextColor={colors.textSearchPlaceholder}
          onChangeText={(text) => {
            setQuery(text);
            filterSection(text);
          }}
          value={query}
          editable
          /*
          // @ts-ignore */
          style={Platform.OS === "web" && { outline: "none" }}
          labelStyle={{
            color: colors.textSearchLabel,
          }}
          inputStyle={{
            color: colors.text,
            padding: 7,
          }}
          leftIcon={{
            type: "font-awesome",
            name: "search",
            color: colors.error,
            size: 19,
          }}
        />
      </View>
      {!_.isEmpty(query) && (
        <FlatList
          data={filterSection(query)}
          extraData={query}
          renderItem={({ item }) => <Item snipItem={item} />}
          keyExtractor={(item, index): any => String(index)}
          style={styles.section}
        />
      )}
      {_.isEmpty(query) && (
        <SectionList
          sections={SNIPPETS}
          keyExtractor={(item, index): any => String(index)}
          renderItem={({ item }) => <Item snipItem={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={[Styles.novaFamily, styles.header]}>{title}</Text>
          )}
          style={styles.section}
        />
      )}
    </View>
  );
}
