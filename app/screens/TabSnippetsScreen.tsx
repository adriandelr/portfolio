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

import { SNIPPETS } from "../constants/Snippets";
import _ from "lodash";
import Icon from "react-native-vector-icons/FontAwesome5";
import Markdown from "react-native-markdown-display";
import { Input } from "react-native-elements";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function TabSnippetsScreen() {
  const { colors } = useTheme();

  function Item({ snipItem }: any) {
    const [open, setOpen] = useState(false);

    const toggleAccordion = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setOpen(!open);
    };

    return (
      <View>
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
        </TouchableOpacity>
        {Platform.OS === "web" && open && (
          <Text selectable={true}>
            <Markdown style={mdStyles}>{snipItem.content}</Markdown>
          </Text>
        )}
        {Platform.OS !== "web" && open && (
          <Markdown style={mdStyles}>{snipItem.content}</Markdown>
        )}
        {open && snipItem.link && (
          <Linker url={snipItem.link} text="View Source" color={colors.link} />
        )}
      </View>
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
      color: colors.textSnipHeader,
      marginTop: 20,
      fontWeight: "700",
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
      paddingHorizontal: 7,
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
          labelStyle={[
            Styles.novaFamily,
            {
              color: colors.textSearchLabel,
            },
          ]}
          inputStyle={[
            Styles.novaFamily,
            {
              fontSize: 17,
              color: colors.text,
              padding: 7,
            },
          ]}
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
