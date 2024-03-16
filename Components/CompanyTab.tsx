import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function CompanyTab() {
  return (
    <View>
      <Text style={styles.heading}>About Company</Text>
      <Text style={styles.paragraph} numberOfLines={7}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages,
      </Text>
      <Text style={[styles.heading, styles.mt]}>Company Contact</Text>
      <View style={styles.contactBox}>
        <View style={styles.leftSection}>
          <View style={styles.contactIcon}></View>
          <View style={{ marginLeft: 4 }}>
            <Text style={styles.contactName}>Jenny Wilson</Text>
            <Text style={styles.position}>HR Manager</Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <View style={styles.iconBox}>
            <Icon name="comment" size={20} color="black" />
          </View>
          <View style={styles.iconBox}>
            <Icon name="address-book" size={20} color="black" />
          </View>
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
  paragraph: {
    color: "#828a99",
  },
  mt: {
    marginTop: 7,
  },
  contactBox: {
    flexDirection: "row",
    marginTop: 3,
    marginBottom: 65
  },
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#77787a",
  },
  leftSection: {
    flex: 3,
    flexDirection: "row",
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
  position: {
    color: "#828a99",
    fontSize: 12,
  },
  iconBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#d9dbde",
    justifyContent: "center",
    alignItems: "center",
  },
});
