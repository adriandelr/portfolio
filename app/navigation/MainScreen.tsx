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

import Linker from "../components/Linker";
import { useTheme } from "../hooks/useThemeContext";
import Styles from "../constants/Styles";
import Back from "../components/BackHandler";

import { Text } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

export default function MainScreen() {
  const { colors } = useTheme();
  Back();

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
        <Linker
          url={
            "https://drive.google.com/file/d/1YrCNM6RgqmXvbbMrHPwLucF1Q3ZdPEmw/view?usp=sharing"
          }
          iconOnly="address-card"
          color={colors.text}
        />
        <Linker
          url={"viber://contact?number=%2B639760166007"}
          iconOnly="viber"
          color={colors.text}
        />
        <Linker
          url={"http://m.me/AZarch"}
          iconOnly="facebook-messenger"
          color={colors.text}
        />
        <Linker
          url={"skype:adrian.delr?chat"}
          iconOnly="skype"
          color={colors.text}
        />
        <Linker
          url={"mailto:adrian.delr@gmail.com"}
          iconOnly="envelope"
          color={colors.text}
        />
        <Text
          style={[
            Styles.novaFamily,
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
        }}
      />
    </Drawer.Navigator>
  );
}
