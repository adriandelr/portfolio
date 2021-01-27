import { Platform } from "react-native";

// Light theme colors
export const lightColors = {
  navBackground: "lightgray",
  background: "whitesmoke",
  avatarBackground: "silver",
  snipItemBackground: "white",
  snipBorder: "lightgray",
  yearGroupBackground: Platform.OS === "web" ? "lightgray" : "whitesmoke",
  primary: "dimgrey",
  text: "dimgrey",
  textAvatar: "whitesmoke",
  textGuide: "whitesmoke",
  textSnipTitle: "grey",
  textSnipContent: "dimgrey",
  textYearGroup: "dimgrey",
  link: "#D3D3D3",
  error: "slategrey",
};

// Dark theme colors
export const darkColors = {
  navBackground: "dimgrey",
  background: "#101111",
  avatarBackground: "dimgrey",
  snipItemBackground: "#101111",
  snipBorder: "grey",
  yearGroupBackground: Platform.OS === "web" ? "dimgrey" : "#101111",
  primary: "darkgrey",
  text: "gainsboro",
  textAvatar: "silver",
  textGuide: "whitesmoke",
  textSnipTitle: "darkgray",
  textSnipContent: "dimgrey",
  textYearGroup: "darkgrey",
  link: "#D3D3D3",
  error: "slategrey",
};
