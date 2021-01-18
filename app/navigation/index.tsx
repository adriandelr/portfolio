// import { Ionicons } from "@expo/vector-icons";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { Button, View, Text, Platform, ColorSchemeName } from "react-native";

// import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
// import BottomTabNavigator from "./_BottomTabNavigator";
// import MaterialTopTabNavigator from "./MaterialTopTabNavigator";
// import LinkingConfiguration from "./LinkingConfiguration";

// import { Appearance } from "react-native-appearance";

import { useTheme } from "../components/ThemeContext";
import Icon from "react-native-vector-icons/Ionicons";

import TabMainScreen from "./MainScreen";
import TabDevScreen from "../screens/TabDevScreen";
import TabProjectsScreen from "../screens/TabProjectsScreen";
import TabSnippetsScreen from "../screens/TabSnippetsScreen";
import {
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
  TabFourParamList,
} from "../types";

function SettingsScreen({ route, navigation }: any) {
  const { user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Text>userParam: {JSON.stringify(user)}</Text>
      <Button title="Go to Dev" onPress={() => navigation.navigate("Dev")} />
    </View>
  );
}

function DevScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Dev Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("TabProjects")}
      />
    </View>
  );
}

function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate("Root", {
            screen: "Settings",
            params: { user: "jane" },
          })
        }
      />
    </View>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
const TopTab = createMaterialTopTabNavigator();

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={DevScreen} />
    </Stack.Navigator>
  );
}

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const { setScheme, colors, isDark } = useTheme();

  return (
    <NavigationContainer>
      <TopTab.Navigator
        initialRouteName="TabDev"
        tabBarPosition={Platform.OS === "web" ? "top" : "bottom"}
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

const MainScreenTabStack = createStackNavigator<TabFourParamList>();

function MainScreenTabNavigator() {
  return (
    <MainScreenTabStack.Navigator>
      <MainScreenTabStack.Screen
        name="TabMainScreen"
        component={TabMainScreen}
        options={{
          title: dpTitle + "Dev",
          headerShown: false,
          headerTitle: "Tab One Title",
        }}
      />
    </MainScreenTabStack.Navigator>
  );
}

const DevTabStack = createStackNavigator<TabOneParamList>();

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

// function RootNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen
//         name="Root"
//         // component={BottomTabNavigator}
//         // component={MaterialTopTabNavigator}
//         component={RootNavigator}
//       />
//       <Drawer.Screen name="TabDevScreen" component={TabDevScreen} />
//       <Stack.Screen
//         name="NotFound"
//         component={NotFoundScreen}
//         options={{ title: "Oops!" }}
//       />
//     </Stack.Navigator>
//   );
// }
