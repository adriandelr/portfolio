import React, { useState, memo } from "react";
import { Platform, ColorSchemeName, Keyboard } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

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

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const { colors } = useTheme();

  const [hideMenu, setHideMenu] = useState(false);
  Keyboard.addListener("keyboardDidShow", () => setHideMenu(true));
  Keyboard.addListener("keyboardDidHide", () => setHideMenu(false));

  return (
    <NavigationContainer>
      <TopTab.Navigator
        initialRouteName="TabDev"
        tabBarPosition={Layout.isSmallDevice && !hideMenu ? "bottom" : "top"}
        lazy={true}
        lazyPreloadDistance={0.3}
        swipeVelocityImpact={0.3}
        tabBarOptions={{
          activeTintColor: colors.primary,
          allowFontScaling: false,
          pressColor: "whitesmoke",
          labelStyle: Styles.nunitoFamily,
          style: {
            backgroundColor: colors.backgroundNav,
          },
          indicatorStyle: {
            backgroundColor: colors.primary,
          },
          iconStyle: {
            flexWrap: "wrap",
          },
          showIcon: hideMenu ? false : true,
        }}
        style={{
          backgroundColor: colors.background,
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        swipeEnabled={Platform.OS === "web" ? false : true}
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
};

const TabBarIcon = memo((props: { name: string; color: string }) => {
  return <Icon size={30} style={{ marginBottom: -3 }} {...props} />;
});

let dpTitle = "Adrian del Rosario - ";

const MainScreenTabStack = createStackNavigator<RootStackParamList>();

const MainScreenTabNavigator = () => {
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
};

const ProjectsTabStack = createStackNavigator<TabProjectsParamList>();

const ProjectsTabNavigator = () => {
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
};

const SnippetsTabStack = createStackNavigator<TabSnippetsParamList>();

const SnippetsTabNavigator = () => {
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
};

export default memo(Navigation);
