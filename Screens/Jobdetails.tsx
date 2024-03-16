import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

export default function JobDetails() {
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
    marginTop: 35
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
});
