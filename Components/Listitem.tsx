import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

type Itempara ={
    item:string
}

export default function Listitem({item}:Itempara) {
  return (
    <View style={styles.flexBox}>
      <Icon name="dot-circle-o" size={20} color="black" />
      <Text style={{marginLeft: 6,color: '#828a99'}}>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flexBox: {
    flexDirection: "row",
  },
});
