import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.branding}>
        <Text style={styles.headerText}>Hire-Wisely</Text>
        <Icon name="bars" size={20} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 14,
    fontWeight: "600",
    color: "black",
  },
  branding: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
