import * as React from "react";
import { View } from "react-native";
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
import Styles from "../constants/Styles";

import { Text } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

export default function MainScreen() {
  const { colors } = useTheme();

  const navigation: any = useNavigation(),
    isFocused = useIsFocused();

  function CustomDrawerContent(props: any) {
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label={() => null}
            onPress={() => {
              navigation.navigate("TabProjects");
              navigation.dispatch(DrawerActions.closeDrawer());
            }}
            icon={() => (
              <Icon
                color={colors.text}
                size={24}
                name="briefcase-sharp"
                style={{
                  height: 53,
                  top: 0,
                  left: 0,
                  marginTop: 7,
                  marginLeft: 7,
                }}
              />
            )}
            style={{
              height: 53,
            }}
          />
          <DrawerItem
            label={() => null}
            onPress={() => {
              navigation.navigate("TabSnippets");
              navigation.dispatch(DrawerActions.closeDrawer());
            }}
            icon={() => (
              <Icon
                color={colors.text}
                size={24}
                name="list-circle-sharp"
                style={{
                  height: 53,
                  top: 0,
                  left: 0,
                  marginTop: 7,
                  marginLeft: 7,
                }}
              />
            )}
            style={{
              height: 53,
            }}
          />
        </DrawerContentScrollView>
        <Text
          style={[
            Styles.nunitoFamily,
            {
              fontSize: 9,
              color: colors.textVersion,
              alignSelf: "center",
              justifyContent: "flex-end",
              borderTopWidth: 1,
              borderColor: colors.link,
              paddingTop: 3,
              marginBottom: 13,
            },
          ]}
        >
          Version 1.0.0
        </Text>
      </View>
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
        width: 73,
      }}
      drawerContentOptions={{
        activeTintColor: colors.error,
        itemStyle: { height: 53 },
      }}
      edgeWidth={200}
      minSwipeDistance={10}
      sceneContainerStyle={{
        backgroundColor: "transparent",
      }}
    >
      <Drawer.Screen
        name="Adrian Del Rosario - Dev"
        component={TabDevScreen}
        options={{
          drawerIcon: () => (
            <Icon
              color={colors.text}
              size={24}
              name="person-circle-sharp"
              style={{
                height: 53,
                top: 0,
                left: 0,
                marginTop: 7,
                marginLeft: 7,
              }}
            />
          ),
          headerTitleStyle: Styles.nunitoFamily,
        }}
      />
    </Drawer.Navigator>
  );
}
