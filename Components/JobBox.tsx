import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

type jobProp = {
  name: string;
  company: string;
  location: string;
  tags: String[];
  applicants: number;
  salary: string;
  navigation: any;
};

export default function JobBox({
  name,
  company,
  location,
  tags,
  applicants,
  salary,
  navigation,
}: jobProp) {
  return (
    <Pressable onPress={() => navigation.navigate('Jobdetails')}>
      <View style={styles.box}>
        <View style={styles.heading}>
          <View style={styles.titleSection}>
            <View style={styles.profilePic}>
              <Text style={styles.profileIcon}>B.</Text>
            </View>
            <View style={styles.jobarea}>
              <Text style={styles.jobtitle}>{name}</Text>
              <Text style={styles.companyName}>{company}</Text>
            </View>
          </View>
          <Icon
            style={{ marginTop: 10 }}
            name="bookmark"
            size={20}
            color="black"
          />
        </View>
        {location.length ? (
          <View style={styles.location}>
            <Icon name="map-pin" size={20} color="black" />
            <Text style={styles.locationText}>{location}</Text>
          </View>
        ) : (
          ""
        )}
        <View style={styles.tagscontainer}>
          {tags.map((tag, index) => {
            return (
              <View key={index} style={styles.tagBox}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.borderbottom}></View>
        <View style={styles.applicantsection}>
          <Text style={styles.companyName}>{applicants} Applicants</Text>
          <Text style={styles.salary}>
            {salary}
            <Text style={styles.companyName}>/ month</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 330,
    height: 230,
    borderRadius: 15,
    padding: 15,
    marginLeft: 10,
    backgroundColor: "#e4e6eb",
  },
  heading: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  titleSection: {
    flex: 1,
    flexDirection: "row",
  },
  profilePic: {
    width: 40,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#0740ab",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileIcon: {
    fontSize: 20,
    fontWeight: "800",
  },
  jobarea: {
    flex: 4,
    marginLeft: 5,
    marginTop: 4,
  },
  jobtitle: {
    fontWeight: "500",
    color: "black",
    fontSize: 16,
  },
  companyName: {
    fontWeight: "400",
    color: "#828a99",
    fontSize: 12,
  },
  location: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#545a66",
    marginLeft: 4,
  },
  tagscontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tagBox: {
    padding: 10,
    backgroundColor: "#cacfdb",
    height: 40,
    borderRadius: 5,
  },
  tagText: {
    color: "black",
    fontWeight: "600",
  },
  borderbottom: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginTop: 5,
  },
  applicantsection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  salary: {
    color: "black",
    fontWeight: "600",
  },
});
