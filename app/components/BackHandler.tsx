import React, { useEffect } from "react";
import { Alert, BackHandler, StatusBar } from "react-native";

const Back = () => {
  const backAction = () => {
    Alert.alert("Going out?", "Are you sure you want to?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "YES", onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
};

export default Back;
