import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { Platform, ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import TabMainScreen from "./MainScreen";
import TabProjectsScreen from "../screens/TabProjectsScreen";
import TabSnippetsScreen from "../screens/TabSnippetsScreen";
import { TabProjectsParamList, TabSnippetsParamList } from "../types";

import { useTheme } from "../hooks/useThemeContext";
import Styles from "../constants/Styles";
import Layout from "../constants/Layout";

import Icon from "react-native-vector-icons/Ionicons";

const TopTab = createMaterialTopTabNavigator();

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <TopTab.Navigator
        initialRouteName="TabDev"
        tabBarPosition={
          Platform.OS === "web" && !Layout.isSmallDevice ? "top" : "bottom"
        }
        lazy={true}
        lazyPreloadDistance={0.3}
        swipeVelocityImpact={0.3}
        tabBarOptions={{
          activeTintColor: colors.primary,
          style: {
            backgroundColor: colors.backgroundNav,
          },
          labelStyle: Styles.nunitoFamily,
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
        style={{
          backgroundColor: colors.background,
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
      >
        <TopTab.Screen
          name="TabDev"
          component={MainScreenTabNavigator}
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
    </NavigationContainer>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Icon size={30} style={{ marginBottom: -3 }} {...props} />;
}

let dpTitle = "Adrian del Rosario - ";

const MainScreenTabStack = createStackNavigator<RootStackParamList>();

function MainScreenTabNavigator() {
  return (
    <MainScreenTabStack.Navigator>
      <MainScreenTabStack.Screen
        name="TabMainScreen"
        component={TabMainScreen}
        options={{
          title: dpTitle + "Dev",
          headerShown: false,
          cardStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
      <MainScreenTabStack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </MainScreenTabStack.Navigator>
  );
}

const ProjectsTabStack = createStackNavigator<TabProjectsParamList>();

function ProjectsTabNavigator() {
  return (
    <ProjectsTabStack.Navigator>
      <ProjectsTabStack.Screen
        name="TabProjectsScreen"
        component={TabProjectsScreen}
        options={{
          title: dpTitle + "Projects",
          headerShown: false,
          cardStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
    </ProjectsTabStack.Navigator>
  );
}

const SnippetsTabStack = createStackNavigator<TabSnippetsParamList>();

function SnippetsTabNavigator() {
  return (
    <SnippetsTabStack.Navigator>
      <SnippetsTabStack.Screen
        name="TabSnippetsScreen"
        component={TabSnippetsScreen}
        options={{
          title: dpTitle + "Snippets",
          headerShown: false,
          cardStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
    </SnippetsTabStack.Navigator>
  );
}
