import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Listitem from "./Listitem";

export default function AboutTab() {
  return (
    <View>
      <Text style={styles.heading}>About this Job</Text>
      <Text style={styles.paragraph} numberOfLines={3}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages,
      </Text>
      <Text style={styles.heading}>Job Description</Text>
      <FlatList
        data={[
          {
            key: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lo",
            id: 1,
          },
          {
            key: "it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default m",
            id: 2,
          },
          {
            key: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default m",
            id: 3,
          },
          {
            key: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven",
            id: 4,
          },
        ]}
        renderItem={({ item }) => <Listitem key={item.id} item={item.key} />}
      />
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
