import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

const width = Dimensions.get("window").width; //full width

export default function CommonHeader({navigation}:any) {
  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <View style={styles.circularButton}>
            <Icon name="arrow-left" size={20} color="black" />
          </View>
        </Pressable>
      </View>
      <View style={styles.rightSection}>
        <View style={styles.circularButton}>
          <Icon name="bookmark" size={20} color="black" />
        </View>
        <View style={styles.circularButton}>
          <Icon name="share-alt" size={20} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 150,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  circularButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  leftSection: {
    flex: 2,
  },
  rightSection: {
    flex: 1,
    flexDirection: "row",
  },
});
