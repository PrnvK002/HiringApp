import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ReviewTab() {
  return (
    <View>
      <Text style={styles.heading}>Reviews</Text>
      <View style={styles.reviewBox}>
        <View style={styles.reviewHeading}>
          <View style={styles.leftSection}>
            <View style={styles.contactIcon}></View>
            <View style={{ marginLeft: 4 }}>
              <Text style={styles.contactName}>Jenny Wilson</Text>
            </View>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.time}>11 months ago</Text>
          </View>
        </View>
        <View style={styles.reviewContent}>
          <Text style={styles.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "black",
    fontWeight: "500",
    fontSize: 16,
  },
  time: {
    color: "#828a99",
    fontSize: 11,
  },
  paragraph: {
    color: "#828a99",
    marginTop: 5,
  },
  reviewBox: {
    marginTop: 10,
    marginBottom: 30
  },
  reviewHeading: {
    flexDirection: "row",
    marginTop: 3,
  },
  reviewContent: {},
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#77787a",
  },
  leftSection: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  rightSection: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  contactName: {
    color: "black",
    fontWeight: "600",
    fontSize: 16,
  },
});
