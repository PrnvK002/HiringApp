import { StyleSheet, Text, View } from "react-native";
import React from "react";

type filterprop = { name: string };
export default function Jobfilter({ name }: filterprop) {
  return (
    <View style={styles.filter}>
      <Text style={styles.filterText}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  filter: {
    padding: 10,
    backgroundColor: "#ffff",
    height: 40,
    borderRadius: 10,
    margin: 3
  },
  filterText: {
    color: "black",
  },
});
