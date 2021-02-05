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
} from "react-native";

import { PROJECTS } from "../constants/Projects";
import { useTheme } from "../hooks/useThemeContext";
import Linker from "../components/Linker";
import Loader from "../components/Loader";
import Styles from "../constants/Styles";
import Layout from "../constants/Layout";
import {
  isShowButton,
  computeShowButton,
  BackArrow,
} from "../components/BackArrow";

import _ from "lodash";
import { ButtonGroup } from "react-native-elements";
import ReadMore from "react-native-read-more-text";
import { ScrollView } from "react-native-gesture-handler";
import Xcarousel from "../components/Xcarousel";
import Markdown from "react-native-markdown-display";

const TabProjectsScreen = () => {
  const { colors } = useTheme();
  const listRef: any = useRef<SectionList<any>>();

  const [openDetail, setOpenDetail] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [projIndex, setProjIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedSection, setSelectedSection] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [showLoad, setShowLoad] = useState(true);
  const [showCarousel, setShowCarousel] = useState(false);

  const viewDetail = (projSection: any, projItem: any) => {
    const sectionIndex = _.indexOf(PROJECTS, projSection);
    const projIndex = _.indexOf(PROJECTS[sectionIndex].data, projItem);
    setSelectedSection(projSection);
    setSelectedItem(projItem);
    setSectionIndex(sectionIndex);
    setProjIndex(projIndex);

    setShowCarousel(true);
    setShowLoad(false);

    setOpenDetail(true);
  };

  const closeDetail = () => {
    if (showCarousel) {
      setShowCarousel(false);
      setShowLoad(true);
      setTimeout(() => {
        setOpenDetail(false);
      }, 150);
    }
  };

  const ItemCallbacks = [colors, openDetail];
  const Item = useCallback(({ projSection, projItem }: any) => {
    return (
      <ScrollView
        scrollEnabled={openDetail ? true : false}
        showsVerticalScrollIndicator={openDetail ? true : false}
        style={openDetail ? styles.detailContainer : styles.itemContainer}
      >
        <Text numberOfLines={1} style={[Styles.novaFamily, styles.textTitle]}>
          {projItem.title}
        </Text>
        <Text style={[Styles.novaFamily, styles.textTime]}>
          {projItem.time}
        </Text>
        {!openDetail && (
          <TouchableWithoutFeedback
            onPress={() => {
              viewDetail(projSection, projItem);
            }}
          >
            <Image
              source={projItem.image}
              resizeMethod="scale"
              resizeMode="contain"
              style={styles.image}
            />
          </TouchableWithoutFeedback>
        )}
        {openDetail && (
          <View
            style={{
              height: Layout.window.width * 0.5,
              maxHeight: 360,
              marginVertical: 7,
              opacity: 0.9,
            }}
          >
            <View
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: -10.5,
                marginLeft: -10.5,
                zIndex: 1,
              }}
            >
              {showLoad && <Loader />}
            </View>
            {showCarousel && (
              <Xcarousel sectionId={sectionIndex} itemId={projIndex} />
            )}
          </View>
        )}
        {!openDetail && (
          <ReadMore
            numberOfLines={openDetail ? 0 : 1}
            renderTruncatedFooter={(handlePress: any) =>
              !openDetail && (
                <Text
                  style={[
                    Styles.novaFamily,
                    {
                      fontWeight: "700",
                      color: colors.textReadMore,
                      marginTop: 3,
                      marginBottom: 13,
                    },
                  ]}
                  onPress={
                    openDetail
                      ? handlePress
                      : () => {
                          viewDetail(projSection, projItem);
                        }
                  }
                >
                  {openDetail ? "Read more" : "View details"}
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
            <Text style={[Styles.novaFamily, styles.textDesc]}>
              {projItem.description}
            </Text>
          </ReadMore>
        )}
        {openDetail && (
          <Markdown style={mdStyles}>{projItem.description}</Markdown>
        )}
        {openDetail && projItem.storeLink && (
          <Linker url={projItem.storeLink} text="Store Link" />
        )}
        <Text style={[Styles.novaFamily, styles.textDate]}>
          {projItem.date}
        </Text>
      </ScrollView>
    );
  }, ItemCallbacks);

  const ItemList = useCallback(() => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={PROJECTS}
          keyExtractor={(item): any => item}
          renderItem={({ item, section }) => (
            <Item projSection={section} projItem={item} />
          )}
          ListFooterComponent={() => (
            <View
              style={{
                top: 0,
                paddingBottom: Layout.isSmallDevice ? 177 : 137,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={[Styles.novaFamily, styles.textDesc]}>
                Looking for other details?
              </Text>
              <Linker
                url="https://drive.google.com/file/d/1Dp0FvtoDqGYWdXHZ8qfOTWyk_0v1bh8S/view?usp=sharing"
                text="View My Resume"
                textSize={Platform.OS === "web" ? 14 : 15}
                color={"lightslategrey"}
                bgColor={colors.background}
                borderColor={colors.background}
              />
            </View>
          )}
          ref={listRef}
          scrollEnabled={true}
          showsVerticalScrollIndicator={true}
          style={styles.sectionContainer}
          onScroll={(event) => {
            computeShowButton(event);
            setShowButton(isShowButton);
          }}
          scrollEventThrottle={17}
        />
      </View>
    );
  }, []);

  const ItemDetail = useCallback(() => {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          hardwareAccelerated={true}
          presentationStyle="fullScreen"
          transparent={false}
          visible={openDetail}
          style={styles.modalContainer}
          onRequestClose={() => setOpenDetail(false)}
        >
          <TouchableOpacity
            onPress={() => {
              closeDetail();
            }}
            style={{
              width: "100%",
              height: Platform.OS === "ios" ? 88 : 44,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.backgroundClose,
            }}
            disabled={showCarousel ? false : true}
          >
            {showCarousel && (
              <Text
                style={[
                  Styles.novaFamily,
                  {
                    top: Platform.OS === "ios" ? 24 : 0,
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
            )}
          </TouchableOpacity>
          <Item projSection={selectedSection} projItem={selectedItem} />
        </Modal>
      </View>
    );
  }, ItemCallbacks);

  const YearGroup = () => {
    return (
      <View style={styles.buttonGroupContainer}>
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
    );
  };

  const ScrollUp = useCallback(() => {
    return <BackArrow listRef={listRef} />;
  }, [showButton]);

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
    },
    sectionContainer: {
      paddingTop: Layout.isSmallDevice ? 21 : 73,
    },
    itemContainer: {
      width: "77%",
      maxWidth: 420,
      height: Layout.isSmallDevice ? 573 : 703,
      alignSelf: "center",
    },
    detailContainer: {
      width: "100%",
      height: "100%",
      paddingHorizontal: Layout.isSmallDevice
        ? 21
        : (Layout.window.width - 640) / 2,
      backgroundColor: colors.background,
    },
    modalContainer: {
      width: "100%",
      height: "100%",
      borderWidth: 0,
    },
    image: {
      width: "100%",
      height: Layout.isSmallDevice ? 300 : "auto",
      minHeight: Layout.isSmallDevice
        ? Layout.isSmallerDevice
          ? "auto"
          : "auto"
        : 420,
      maxHeight: Layout.isSmallDevice
        ? Layout.isSmallerDevice
          ? 280
          : "auto"
        : 420,
      marginVertical: 7,
      backgroundColor: colors.background,
      opacity: 0.9,
    },
    textTitle: {
      fontSize: Layout.isSmallDevice ? 19 : 24,
      color: colors.text,
      fontWeight: "700",
      marginTop: 7,
    },
    textDesc: {
      fontSize: Platform.OS === "web" ? 14 : 15,
      color: colors.text,
      marginBottom: 7,
    },
    textTime: {
      fontSize: 13,
      color: colors.error,
    },
    textDate: {
      fontSize: 13,
      color: colors.textDate,
      paddingVertical: 14,
      paddingBottom: openDetail ? (Platform.OS === "ios" ? 70 : 21) : 0,
    },
    buttonGroupContainer: {
      width: Layout.isSmallDevice ? "100%" : "100%",
      height: Layout.isSmallDevice ? 30 : 30,
      alignSelf: "center",
      position: "absolute",
      top: !Layout.isSmallDevice ? 0 : "auto",
      bottom: Layout.isSmallDevice ? 0 : "auto",
    },
  });

  const mdStyles = StyleSheet.create({
    body: {
      width: "100%",
      paddingHorizontal: 7,
      paddingBottom: 7,
      color: colors.text,
      fontFamily: "proxima-regular",
    },
  });

  return (
    <View style={styles.container}>
      {openDetail && <ItemDetail />}
      <ItemList />
      {!openDetail && <YearGroup />}
      {!openDetail && showButton && <ScrollUp />}
    </View>
  );
};

export default memo(TabProjectsScreen);
