import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Alert,
  Text,
  Image,
  Modal,
  StyleSheet,
  View,
  SectionList,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

import { useTheme } from "../hooks/useThemeContext";
import Linker from "../components/Linker";
import Styles from "../constants/Styles";
import Layout from "../constants/Layout";

import _ from "lodash";
import ImageViewer from "react-native-image-zoom-viewer";
import { ButtonGroup } from "react-native-elements";
import { Icon } from "react-native-elements";
// import Icon from "react-native-vector-icons/FontAwesome5";
import ReadMore from "react-native-read-more-text";
import { ScrollView } from "react-native-gesture-handler";

export const PROJECTS: any = [
  {
    year: "2021",
    data: [
      {
        title: "Portfolio",
        description:
          "New year, new app! \n\nMy very own Digital Portfolio, made using React Native by Facebook.",
        time: "1 month",
        date: "Jan 2021",
        images: [
          {
            url: "",
            props: {
              source: require("../assets/images/projects/az-proj.png"),
            },
          },
        ],
      },
    ],
  },
  {
    year: "2017",
    data: [
      {
        title: "Hospitality Marketing Concepts LLC",
        description:
          "In a remote setup, I was mainly in charge of the mobile app’s front end maintenance, bug fixes, and testing of the company’s existing platform. \n\nRegular discussion of improvement with the President / Chief Marketing Officer, and IT Manager to make sure we are always intact with our client’s requirements. \n\nConstant team communication via email, and skype in an Agile setting. Lately, adding Scrum to it. Additionally, I have recruited, and trained two developers that helped us in our development. \n\nFor more details, please see Resume, and Store Links.",
        time: "2 years 7 months",
        date: "Sept 2017 - Mar 2020",
        images: [
          {
            url: "",
            props: {
              source: require("../assets/images/projects/proj-hmc.png"),
            },
          },
        ],
        showResume: true,
        storeLink:
          Platform.OS === "ios"
            ? "https://apps.apple.com/ph/developer/hospitality-marketing-concepts-llc/id837144091"
            : "https://play.google.com/store/apps/developer?id=Hospitality+Marketing+Concepts",
      },
    ],
  },
  {
    year: "2014",
    data: [
      {
        title: "Accenture Philippines Inc.",
        description:
          "‣ Large Restaurant Chain and International Franchise in US \n‣ Toll Highway Administrative Agency in US \n‣ Public Housing Agency Provider in Hong Kong \n‣ British Multinational Telecommunications Company in UK \n‣ Work Schedule Management Application in Internal Business Development \n‣ Presentation Management Application in Internal Business Development \n‣ Facilitation of AngularJS training \n‣ Estimation on Agile Sprint Complexity \n‣ Brown Bag Compilation \n‣ Global Law Firm in US \n\nFor more details, please see Resume link.",
        time: "2 years 5 months",
        date: "Dec 2014 - April 2017",
        images: [
          {
            url: "",
            props: {
              source: require("../assets/images/projects/proj-acn.png"),
            },
          },
        ],
        showResume: true,
      },
    ],
  },
  {
    year: "2013",
    data: [
      {
        title: "WideOut (WF) Inc.",
        description:
          "R&D on various website features using Agile Method and Frameworks such as: CodeIgniter and Wordpress while observing proper responsive web design. \n\nWorked on a location-based mobile marketing service, an advanced, complete Anti-Theft Technology for mobile phones, and a social media website that utilizes Youtube and social media login APIs.",
        time: "1 year",
        date: "Sep 2013 - Aug 2014",
        images: [
          {
            url: "",
            props: {
              source: require("../assets/images/projects/proj-wo.png"),
            },
          },
        ],
      },
    ],
  },
  {
    year: "2012",
    data: [
      {
        title: "IBM Philippines Inc.",
        description:
          "Designed and organized banners, posters, slogans, prints, and documents for formal events. \n\nProduced video slides and presentations for company news and events updates.",
        time: "6 months",
        date: "Jun - Dec 2012",
        images: [
          {
            url: "",
            props: {
              source: require("../assets/images/projects/proj-ibm.png"),
            },
          },
        ],
      },
    ],
  },
  {
    year: "2012",
    data: [
      {
        title: "Avolution Inc.",
        description:
          "Redesigned and redeveloped the old flash site to the modern web standard with SEO Optimization. Designed the header of the logo and tagline.",
        time: "2 months",
        date: "Apr - May 2012",
        images: [
          {
            url: "",
            props: {
              source: require("../assets/images/projects/proj-avo.png"),
            },
          },
        ],
      },
    ],
  },
  {
    year: "2011",
    data: [
      {
        title: "CATA Construction Philippines Corp.",
        description:
          "Constructed the old website’s sitemap and enhanced images for web presentation.",
        time: "2 months",
        date: "Apr - May 2011",
        images: [
          {
            url: "",
            props: {
              source: require("../assets/images/projects/proj-cata.png"),
            },
          },
        ],
      },
    ],
  },
];

export default function TabProjectsScreen({ route, navigation }: any) {
  const { colors } = useTheme();
  const listRef: any = useRef<SectionList<any>>();

  const resumeURL =
    "https://drive.google.com/file/d/1MX6I97C9fx8CTzV5YQhRPwYdyAEjsyhm/view?usp=sharing";

  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedSection, setSelectedSection] = useState([]);

  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const Item = ({ projItem, projSection }: any) => {
    return (
      <ScrollView
        scrollEnabled={open ? true : false}
        showsVerticalScrollIndicator={open ? true : false}
        style={open ? styles.detail : styles.item}
      >
        <Text style={[Styles.novaFamily, styles.title]}>{projItem.title}</Text>
        <Text style={[Styles.novaFamily, styles.time]}>{projItem.time}</Text>
        <View pointerEvents="auto">
          {!open && (
            <TouchableWithoutFeedback
              onPress={() => {
                setOpen(true);
                setSelectedItem(projItem);
                setSelectedSection(projSection);
                setImages(projItem.images);
              }}
            >
              <Image
                source={projItem.images[0].props.source}
                defaultSource={projItem.images[0].props.source}
                resizeMethod="scale"
                resizeMode="contain"
                style={{
                  width: "100%",
                  height:
                    Platform.OS === "web" ? 370 : Layout.window.width - 70,
                  marginVertical: 7,
                  backgroundColor: "black",
                  opacity: 0.9,
                  /*
                  // @ts-ignore */
                  cursor: "pointer",
                }}
              />
            </TouchableWithoutFeedback>
          )}
          {open && (
            <ImageViewer
              imageUrls={images}
              useNativeDriver={true}
              enablePreload={true}
              enableSwipeDown={false}
              onCancel={() => {
                setOpen(false);
              }}
              style={{
                width: "100%",
                height: Platform.OS === "web" ? 370 : Layout.window.width - 70,
                marginVertical: 7,
                backgroundColor: "black",
                opacity: 0.9,
              }}
              renderHeader={() => (
                <View
                  style={{
                    justifyContent: "center",
                    backgroundColor: "black",
                  }}
                >
                  <Text
                    style={[
                      Styles.novaFamily,
                      {
                        fontSize: 13,
                        color: colors.text,
                        alignSelf: "center",
                        margin: 7,
                      },
                    ]}
                  >
                    Swipe between images, or pinch to zoom
                  </Text>
                </View>
              )}
              renderIndicator={(currentIndex, allSize) => <Text></Text>}
              renderFooter={(currentIndex) => (
                <TouchableOpacity
                  onPress={() => {
                    setOpen(false);
                  }}
                  style={{
                    display: "none",
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "200%",
                      height: 90,
                      backgroundColor: colors.background,
                    }}
                  >
                    <Text
                      style={[
                        Styles.novaFamily,
                        {
                          fontSize: 16,
                          color: colors.text,
                          marginTop: 7,
                          textAlign: "center",
                        },
                      ]}
                    >
                      Tap here to close zoom view
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              // menuContext={{}}
            />
          )}
        </View>
        <View style={{ marginBottom: open ? 14 : 0 }}>
          <ReadMore
            numberOfLines={open ? 0 : 1}
            renderTruncatedFooter={(handlePress: any) =>
              !open && (
                <Text
                  style={[
                    Styles.novaFamily,
                    {
                      fontWeight: open ? "normal" : "700",
                      color: colors.textReadMore,
                      marginTop: 3,
                      marginBottom: 13,
                    },
                  ]}
                  onPress={
                    open
                      ? handlePress
                      : () => {
                          setOpen(true);
                          setSelectedItem(projItem);
                          setSelectedSection(projSection);
                          setImages(projItem.images);
                        }
                  }
                >
                  {open ? "Read more" : "View details"}
                </Text>
              )
            }
            renderRevealedFooter={(handlePress: any) => (
              <Text
                style={[
                  Styles.novaFamily,
                  {
                    color: colors.textReadMore,
                    marginTop: 3,
                    marginBottom: 13,
                  },
                ]}
                onPress={handlePress}
              >
                Show less
              </Text>
            )}
          >
            <Text style={[Styles.novaFamily, styles.desc]}>
              {projItem.description}
            </Text>
          </ReadMore>
        </View>
        {open && projItem.showResume && (
          <Linker url={resumeURL} text="View Resume" color={colors.link} />
        )}
        {open && projItem.storeLink && (
          <Linker
            url={projItem.storeLink}
            text="Store Link"
            color={colors.link}
          />
        )}
        <Text style={[Styles.novaFamily, styles.date]}>{projItem.date}</Text>
      </ScrollView>
    );
  };

  const scrollOffset = useRef(0);
  const [showButton, setShowButton] = useState(false);
  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const layoutMeasurementHeight =
          event.nativeEvent.layoutMeasurement.height,
        contentOffsetY = event.nativeEvent.contentOffset.y,
        contentSizeHeight = event.nativeEvent.contentSize.height,
        offset = contentSizeHeight / 3,
        direction =
          contentOffsetY > 0 && contentOffsetY >= scrollOffset.current
            ? "down"
            : "up",
        isUp = direction === "up",
        isDown = direction === "down",
        isEnd =
          layoutMeasurementHeight + contentOffsetY >=
          contentSizeHeight - offset;
      if (isUp && contentOffsetY < offset && showButton) setShowButton(false);
      if (isDown && isEnd && !showButton) setShowButton(true);
      scrollOffset.current = contentOffsetY;
    },
    [showButton]
  );

  const BackArrow = () => {
    return (
      <View
        style={{
          position: "absolute",
          right: Platform.OS === "web" ? 49 : 19,
          bottom: Platform.OS === "web" ? 49 : 59,
        }}
      >
        {showButton && (
          <TouchableOpacity
            onPress={() => {
              listRef.current?.scrollToLocation({
                itemIndex: 0,
                sectionIndex: 0,
                animated: true,
              });
            }}
          >
            <Icon
              name="arrow-up"
              type="font-awesome-5"
              color={colors.backArrow}
              style={{
                width: 44,
                height: 44,
                fontSize: 33,
              }}
              reverse
            />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 3,
    },
    section: {
      paddingTop: 28,
      paddingHorizontal:
        Platform.OS === "web" ? (Layout.isSmallDevice ? "0%" : "21%") : 0,
    },
    item: {
      height: 537,
      marginHorizontal: 21,
    },
    detail: {
      flex: 1,
      paddingHorizontal: 21,
      backgroundColor: colors.background,
    },
    header: {
      display: "none",
      fontSize: 13,
      color: colors.error,
      textAlign: "right",
      paddingRight: 17,
    },
    title: {
      fontSize: Layout.isSmallDevice ? 19 : 24,
      color: colors.text,
      fontWeight: "700",
      marginTop: open ? 7 : 0,
    },
    desc: {
      fontSize: Platform.OS === "web" ? 14 : 15,
      color: colors.text,
      marginBottom: 7,
    },
    time: {
      fontSize: 13,
      color: colors.error,
    },
    date: {
      fontSize: 13,
      color: colors.textDate,
      paddingVertical: 14,
    },
  });

  return (
    <View style={styles.container}>
      {open && (
        <View
          style={{
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          <Modal
            animationType="slide"
            hardwareAccelerated={true}
            presentationStyle="fullScreen"
            transparent={false}
            visible={open}
            style={{
              width: "100%",
              height: "100%",
              flex: 1,
              borderWidth: 0,
              borderColor: "none",
              backgroundColor: colors.background,
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: colors.background,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setOpen(false);
                }}
                style={{
                  height: 44,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.backgroundClose,
                }}
              >
                <Text
                  style={[
                    Styles.novaFamily,
                    {
                      fontSize: 14,
                      color: colors.text,
                      marginRight: 7,
                    },
                  ]}
                >
                  {Platform.OS === "web"
                    ? "Close detail view"
                    : "Tap here to close detail view"}
                </Text>
              </TouchableOpacity>
              <Item projItem={selectedItem} projSection={selectedSection} />
            </View>
          </Modal>
        </View>
      )}
      {true && (
        <View
          style={{
            width: "100%",
            height: "100%",
            paddingTop: Platform.OS === "web" ? 30 : 0,
          }}
        >
          <View
            style={{
              width: Layout.isSmallDevice ? "100%" : "100%",
              height: Layout.isSmallDevice ? 30 : 30,
              alignSelf: "center",
              position: "absolute",
              top: !Layout.isSmallDevice ? 0 : "auto",
              bottom: Layout.isSmallDevice ? 0 : "auto",
              zIndex: 1,
            }}
          >
            <ButtonGroup
              onPress={(selectedIndex: number) => {
                listRef.current?.scrollToLocation({
                  itemIndex: 0,
                  sectionIndex: selectedIndex,
                  animated: true,
                });
              }}
              buttons={_.take(
                _.map(PROJECTS, "year"),
                Layout.isSmallDevice ? 4 : 5
              )}
              Component={TouchableOpacity}
              containerStyle={{
                height: "100%",
                backgroundColor: colors.backgroundYearGroup,
                borderColor: colors.borderYear,
                borderRadius: 0,
                marginVertical: 0,
                marginHorizontal: 0,
              }}
              buttonContainerStyle={{
                backgroundColor: colors.backgroundYearGroup,
              }}
              selectedButtonStyle={{
                backgroundColor: colors.backgroundYearGroup,
              }}
              textStyle={[
                Styles.novaFamily,
                {
                  fontSize: Layout.isSmallDevice ? 14 : 15,
                  color: colors.textYearGroup,
                  backgroundColor: colors.backgroundYearGroup,
                  fontWeight: "700",
                },
              ]}
              selectedTextStyle={{
                color: colors.textYearGroup,
                backgroundColor: colors.backgroundYearGroup,
              }}
              innerBorderStyle={{ width: 0, color: colors.backgroundYearGroup }}
            />
          </View>
          <SectionList
            sections={PROJECTS}
            keyExtractor={(item): any => item}
            renderItem={({ item, section }) => (
              <Item projItem={item} projSection={section} />
            )}
            renderSectionHeader={({ section: { year } }) => (
              <Text style={[Styles.novaFamily, styles.header]}>{year}</Text>
            )}
            ref={listRef}
            style={styles.section}
            onScroll={handleScroll}
            scrollEventThrottle={Platform.OS === "web" ? 17 : 777}
          />
          <BackArrow />
        </View>
      )}
    </View>
  );
}
