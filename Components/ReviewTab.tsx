import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ReviewTab() {
  return (
    <View>
      <Text style={styles.heading}>Reviews</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "black",
    fontWeight: "500",
    fontSize: 16,
  },
  paragraph: {
    color: "#828a99",
  },
});
