// import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Switch } from "react-native";

// import Colors from "../constants/Colors";
// import useColorScheme from "../hooks/useColorScheme";
import TabDevScreen from "../screens/TabDevScreen";
import TabProjectsScreen from "../screens/TabProjectsScreen";
import TabSnippetsScreen from "../screens/TabSnippetsScreen";
import { TabOneParamList, TabTwoParamList, TabThreeParamList } from "../types";

import { useTheme } from "../components/ThemeContext";
import Icon from "react-native-vector-icons/Ionicons";

const TopTab = createMaterialTopTabNavigator();

export default function MaterialTopTabNavigator() {
  // const colorScheme = useColorScheme();

  const { colors, isDark } = useTheme();

  function TabBarIcon(props: { name: string; color: string }) {
    return <Icon size={30} style={{ marginBottom: -3 }} {...props} />;
  }

  const DevTabStack = createStackNavigator<TabOneParamList>();

  let dpTitle = "Adrian del Rosario - ";

  function DevTabNavigator() {
    return (
      <DevTabStack.Navigator>
        <DevTabStack.Screen
          name="TabDevScreen"
          component={TabDevScreen}
          options={{
            title: dpTitle + "Dev",
            headerShown: false,
            headerTitle: "Tab One Title",
          }}
        />
      </DevTabStack.Navigator>
    );
  }

  const ProjectsTabStack = createStackNavigator<TabTwoParamList>();

  function ProjectsTabNavigator() {
    return (
      <ProjectsTabStack.Navigator>
        <ProjectsTabStack.Screen
          name="TabProjectsScreen"
          component={TabProjectsScreen}
          options={{
            title: dpTitle + "Projects",
            headerShown: false,
            headerTitle: "Tab Two Title",
          }}
        />
      </ProjectsTabStack.Navigator>
    );
  }

  const SnippetsTabStack = createStackNavigator<TabThreeParamList>();

  function SnippetsTabNavigator() {
    return (
      <SnippetsTabStack.Navigator>
        <SnippetsTabStack.Screen
          name="TabSnippetsScreen"
          component={TabSnippetsScreen}
          options={{
            title: dpTitle + "Snippets",
            headerShown: false,
            headerTitle: "Tab Two Title",
          }}
        />
      </SnippetsTabStack.Navigator>
    );
  }

  return (
    <TopTab.Navigator
      initialRouteName="TabDev"
      tabBarPosition="bottom"
      lazy={true}
      lazyPreloadDistance={0.3}
      swipeVelocityImpact={0.3}
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: { backgroundColor: colors.navBackground },
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colors.primary,
        },
        iconStyle: {
          flexWrap: "wrap",
        },
        pressColor: "whitesmoke",
        allowFontScaling: false,
      }}
    >
      <TopTab.Screen
        name="TabDev"
        component={DevTabNavigator}
        options={{
          tabBarLabel: "Dev",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person-circle-sharp" color={color} />
          ),
        }}
      />
      <TopTab.Screen
        name="TabProjects"
        component={ProjectsTabNavigator}
        options={{
          tabBarLabel: "Projects",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="briefcase-sharp" color={color} />
          ),
        }}
      />
      <TopTab.Screen
        name="TabSnippets"
        component={SnippetsTabNavigator}
        options={{
          tabBarLabel: "Snippets",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="list-circle-sharp" color={color} />
          ),
        }}
      />
    </TopTab.Navigator>
  );
}
