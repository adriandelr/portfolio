import React, { useState } from "react";
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
} from "react-native";

import { useTheme } from "../hooks/useThemeContext";
import Linker from "../components/Linker";
import Layout from "../constants/Layout";

import ImageViewer from "react-native-image-zoom-viewer";

export default function TabProjectsScreen() {
  const { colors } = useTheme();

  const PROJECTS: any = [
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
            "https://play.google.com/store/apps/developer?id=Hospitality+Marketing+Concepts",
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
          date: " Jun - Dec 2012",
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

  const resumeURL =
    "https://drive.google.com/file/d/1MX6I97C9fx8CTzV5YQhRPwYdyAEjsyhm/view?usp=sharing";

  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const Item = ({ projItem }: any) => (
    <View style={styles.item}>
      <Text style={styles.title}>{projItem.title}</Text>
      <Text style={styles.time}>{projItem.time}</Text>
      <View pointerEvents={Platform.OS === "web" ? "none" : "auto"}>
        <TouchableWithoutFeedback
          onPress={() => {
            setOpen(true);
            setImages(projItem.images);
          }}
        >
          <Image
            source={projItem.images[0].props.source}
            style={{
              width: "100%",
              height: Platform.OS === "web" ? 370 : Layout.window.width - 70,
              marginVertical: 7,
              backgroundColor: "black",
              opacity: 0.9,
            }}
            resizeMode={"contain"}
          />
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.desc}>{projItem.description}</Text>
      {projItem.showResume && (
        <Linker url={resumeURL} text="Open Resume" color={colors.link} />
      )}
      {projItem.storeLink && (
        <Linker
          url={projItem.storeLink}
          text="Store Link"
          color={colors.link}
        />
      )}
      <Text style={styles.date}>{projItem.date}</Text>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 3,
    },
    section: {
      paddingTop: 7,
      paddingHorizontal:
        Platform.OS === "web" ? (Layout.isSmallDevice ? "0%" : "21%") : 0,
    },
    item: {
      padding: 21,
      marginVertical: 17,
    },
    header: {
      display: "none",
      fontSize: 13,
      color: colors.error,
      textAlign: "right",
      paddingRight: 17,
    },
    title: {
      fontSize: Platform.OS === "web" ? 27 : 19,
      color: colors.text,
      fontWeight: Platform.OS === "web" ? "normal" : "300",
    },
    desc: {
      fontSize: Platform.OS === "web" ? 14 : 17,
      color: colors.text,
      marginBottom: 17,
    },
    time: {
      fontSize: 13,
      color: colors.error,
    },
    date: {
      fontSize: 13,
      color: colors.error,
      marginTop: 13,
    },
  });

  return (
    <View style={styles.container}>
      <Modal
        visible={open}
        transparent={false}
        style={{
          borderWidth: 0,
          borderColor: "none",
        }}
      >
        <ImageViewer
          imageUrls={images}
          useNativeDriver={true}
          enablePreload={true}
          enableSwipeDown={true}
          onCancel={() => {
            setOpen(false);
          }}
          renderHeader={() => (
            <TouchableOpacity
              onPress={() => {
                setOpen(false);
              }}
            >
              <View
                style={{
                  height: 30,
                  justifyContent: "center",
                  backgroundColor: colors.background,
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    color: colors.text,
                    alignSelf: "center",
                    marginRight: 7,
                  }}
                >
                  Tap here or swipe down to close zoom view
                </Text>
              </View>
            </TouchableOpacity>
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
                  width: "200%",
                  height: 90,
                  backgroundColor: colors.background,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.text,
                    marginTop: 7,
                    textAlign: "center",
                  }}
                >
                  Tap here to close zoom view
                </Text>
              </View>
            </TouchableOpacity>
          )}
          // menuContext={{}}
        />
      </Modal>
      <SectionList
        sections={PROJECTS}
        keyExtractor={(item, index): any => item}
        renderItem={({ item }) => <Item projItem={item} />}
        renderSectionHeader={({ section: { year } }) => (
          <Text style={styles.header}>{year}</Text>
        )}
        style={styles.section}
      />
    </View>
  );
}
