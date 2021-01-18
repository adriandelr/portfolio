import * as React from "react";
import { Platform } from "react-native";
import { StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  useNavigation,
  useIsFocused,
  DrawerActions,
} from "@react-navigation/native";

import TabDevScreen from "../screens/TabDevScreen";

import { useTheme } from "../components/ThemeContext";
import { Text, Image, colors as elementsColor } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
// import { color } from "react-native-reanimated";

export default function MainScreen() {
  const { setScheme, colors, isDark } = useTheme();

  const navigation: any = useNavigation(),
    isFocused = useIsFocused();

  function CustomDrawerContent(props: any) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={() => <Text style={{ color: colors.text }}>Projects</Text>}
          onPress={() => {
            navigation.navigate("TabProjects");
            navigation.dispatch(DrawerActions.closeDrawer());
          }}
          icon={() => (
            <Icon
              color={colors.text}
              size={24}
              name={isFocused ? "briefcase-sharp" : "briefcase-outline"}
            />
          )}
        />
        <DrawerItem
          label={() => <Text style={{ color: colors.text }}>Snippets</Text>}
          onPress={() => {
            navigation.navigate("TabSnippets");
            navigation.dispatch(DrawerActions.closeDrawer());
          }}
          icon={() => (
            <Icon
              color={colors.text}
              size={24}
              name={isFocused ? "list-circle-sharp" : "list-circle-outline"}
            />
          )}
        />
      </DrawerContentScrollView>
    );
  }

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Dev"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerType="slide"
      drawerStyle={{
        backgroundColor: colors.background,
        width: 200,
      }}
      edgeWidth={200}
      minSwipeDistance={10}
    >
      <Drawer.Screen
        name="Dev"
        component={TabDevScreen}
        options={{
          drawerIcon: () => (
            <Icon
              color={colors.text}
              size={24}
              name={isFocused ? "person-circle-sharp" : "person-circle-outline"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
