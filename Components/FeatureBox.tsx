import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

export default function FeatureBox() {
  return (
    <View style={styles.box}>
      <View style={styles.icon}>
        <Icon name="money" size={20} color="black" />
      </View>
      <View style={styles.features}>
        <Text style={styles.featureTitle}>Salary (monthly)</Text>
        <Text style={styles.featureValue}>$42k - $48k</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 150,
    backgroundColor: "#edebe8",
    borderColor: "#aba9a7",
    borderRadius: 9,
    borderWidth: 2,
    flexDirection: "row",
    padding: 5,
    marginTop: 5
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#999794",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },
  features: {
    marginLeft: 4,
  },
  featureTitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#545a66",
  },
  featureValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#545a66",
  },
});
