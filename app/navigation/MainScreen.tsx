import * as React from "react";
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

import { useTheme } from "../hooks/useThemeContext";
import { Text } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

export default function MainScreen() {
  const { colors } = useTheme();

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
      sceneContainerStyle={{
        backgroundColor: "transparent",
      }}
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
