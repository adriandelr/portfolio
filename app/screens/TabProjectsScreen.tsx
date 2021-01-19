import * as React from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";

import { ListItem, Avatar } from "react-native-elements";

import { useTheme } from "../hooks/useThemeContext";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function TabProjectsScreen() {
  const { colors } = useTheme();

  const PROJECTS: any = [
    {
      year: "2021",
      // data: ["French Fries", "Onion Rings", "Fried Shrimps"],
      data: [
        {
          title: "Cross-Platform Digital Portfolio",
          description: "My Project 1",
          image: "",
        },
      ],
    },
    {
      year: "2020",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      year: "2019",
      data: ["Water", "Coke", "Beer"],
    },
    {
      year: "2018",
      data: ["Cheese Cake", "Ice Cream"],
    },
  ];

  const Item = ({ projItem }: any) => (
    <View style={styles.item}>
      <Text style={styles.title}>{projItem.title}</Text>
      <Text style={styles.desc}>{projItem.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={PROJECTS}
        keyExtractor={(item, index): any => item}
        renderItem={({ item }) => <Item projItem={item} />}
        renderSectionHeader={({ section: { year } }) => (
          <Text style={styles.header}>{year}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 27,
    textAlign: "right",
    paddingRight: 17,
  },
  title: {
    fontSize: 21,
  },
  desc: {},
});
