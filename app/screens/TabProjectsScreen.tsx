import React, { useState, useRef, useCallback, memo } from "react";
import {
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

import { PROJECTS } from "../constants/Projects";
import { useTheme } from "../hooks/useThemeContext";
import Linker from "../components/Linker";
import Styles from "../constants/Styles";
import Layout from "../constants/Layout";

import _ from "lodash";
import ImageViewer from "react-native-image-zoom-viewer";
import { ButtonGroup } from "react-native-elements";
import { Icon } from "react-native-elements";
import ReadMore from "react-native-read-more-text";
import { ScrollView } from "react-native-gesture-handler";
import Xcarousel from "../components/Xcarousel";

const TabProjectsScreen = () => {
  const { colors } = useTheme();
  const listRef: any = useRef<SectionList<any>>();

  const resumeURL =
    "https://drive.google.com/file/d/1MX6I97C9fx8CTzV5YQhRPwYdyAEjsyhm/view?usp=sharing";

  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedSection, setSelectedSection] = useState([]);

  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);

  const Item = useCallback(
    memo(({ projItem, projSection }: any) => {
      const sectionIndex = _.indexOf(PROJECTS, projSection);
      const projIndex = _.indexOf(PROJECTS[sectionIndex].data, projItem);
      return (
        <ScrollView
          scrollEnabled={open ? true : false}
          showsVerticalScrollIndicator={open ? true : false}
          style={open ? styles.detail : styles.item}
        >
          <Text style={[Styles.novaFamily, styles.title]}>
            {projItem.title}
          </Text>
          <Text style={[Styles.novaFamily, styles.time]}>{projItem.time}</Text>
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
                source={projItem.image}
                style={{
                  width: "100%",
                  minHeight: Layout.isSmallDevice
                    ? Layout.isSmallerDevice
                      ? "100%"
                      : 270
                    : 420,
                  maxHeight: Layout.isSmallDevice
                    ? Layout.isSmallerDevice
                      ? "100%"
                      : Layout.window.width - 42
                    : 420,
                  aspectRatio: 1,
                  marginVertical: 7,
                  backgroundColor: "black",
                  opacity: 0.9,
                }}
              />
            </TouchableWithoutFeedback>
          )}
          {open && (
            <View
              style={{
                paddingVertical: 7,
                opacity: 0.9,
              }}
            >
              {open && (
                <Xcarousel sectionId={sectionIndex} itemId={projIndex} />
              )}
            </View>
          )}
          {/* {false && (
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
                height: Platform.OS === "web" ? 420 : Layout.window.width - 70,
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
                      Tap to close detail view
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              // menuContext={{}}
            />
          )} */}
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
    }),
    [open]
  );

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
      paddingHorizontal: Layout.isSmallDevice
        ? 21
        : (Layout.window.width - 443) / 2,
    },
    item: {
      height: Layout.isSmallDevice ? 537 : 737,
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
                    : "Tap to close detail view"}
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
};

export default TabProjectsScreen;
