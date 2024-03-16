import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import FeatureBox from "../Components/FeatureBox";
import AboutTab from "../Components/AboutTab";
import CompanyTab from "../Components/CompanyTab";
import ReviewTab from "../Components/ReviewTab";

export default function JobDetails() {
  const [activeTab, setActivetab] = useState("about");

  const changeTab = (tab: string) => setActivetab(tab);

  return (
    <View style={styles.detailBox}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.profileIcon}>B.</Text>
        </View>
      </View>
      <Text style={styles.jobRole}>UI Designer</Text>
      <Text style={styles.companyName}>BrioSoft Solutions</Text>
      <View style={styles.location}>
        <Icon name="map-pin" size={20} color="black" />
        <Text style={styles.locationText}>New York, USA</Text>
      </View>
      <View style={styles.features}>
        <FeatureBox />
        <FeatureBox />
        <FeatureBox />
        <FeatureBox />
      </View>
      <View style={styles.tabs}>
        <Text
          style={[styles.tab, activeTab === "about" ? styles.activeTab : {}]}
          onPress={() => changeTab("about")}
        >
          About
        </Text>
        <Text
          style={[styles.tab, activeTab === "company" ? styles.activeTab : {}]}
          onPress={() => changeTab("company")}
        >
          Company
        </Text>
        <Text
          style={[styles.tab, activeTab === "reviews" ? styles.activeTab : {}]}
          onPress={() => changeTab("reviews")}
        >
          Review
        </Text>
      </View>
      <View style={styles.tabContainer}>
        {activeTab === "about" ? (
          <AboutTab />
        ) : activeTab === "company" ? (
          <CompanyTab />
        ) : (
          <ReviewTab />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailBox: {
    backgroundColor: "white",
    borderTopRightRadius: 10,
    paddingTop: 40,
  },
  logoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "#0740ab",
    shadowColor: "#666564",
    shadowOpacity: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  profileIcon: {
    fontSize: 25,
    fontWeight: "800",
  },
  jobRole: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: "black",
    marginTop: 35,
  },
  companyName: {
    fontSize: 14,
    fontWeight: "300",
    textAlign: "center",
    color: "#828a99",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  locationText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#545a66",
    marginLeft: 4,
  },
  features: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomColor: "#7a7876",
    borderBottomWidth: 1,
  },
  tab: {
    fontSize: 18,
    color: "black",
    marginTop: 12,
    fontWeight: "500",
  },
  activeTab: {
    borderBottomColor: "#0c4487",
    borderBottomWidth: 3,
    paddingBottom: 2,
    color: "#4c4d4f",
  },
  tabContainer: {
    padding: 15
  },
});
