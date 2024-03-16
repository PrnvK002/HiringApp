import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import JobBox from "../Components/JobBox";
import Jobfilter from "../Components/Jobfilter";

const jobs = [
  {
    name: "UI Designer",
    company: "BrioSoft Solutions",
    location: "New York,USA",
    tags: ["Full Time", "Remote", "Internship"],
    applicants: 322,
    salary: "$42k - $48k",
  },
  {
    name: "FrontEnd developer",
    company: "BrioSoft Solutions",
    location: "Sanfransisco,USA",
    tags: ["Full Time", "Remote", "Permanent"],
    applicants: 300,
    salary: "$90k - $100k",
  },
  {
    name: "Backend Developer",
    company: "Bluestream.io",
    location: "Panaji,Goa",
    tags: ["Full Time", "Remote", "Permanent"],
    applicants: 22,
    salary: "$30k - $35k",
  },
  {
    name: "Fullstack Developer",
    company: "Infosys",
    location: "Bengaluru, Karnatak",
    tags: ["Full Time", "On-site", "Contract"],
    applicants: 200,
    salary: "$42k - $48k",
  },
];
const filters = [
  { name: "All", id: 1 },
  { name: "Accountant", id: 2 },
  { name: "BDM", id: 3 },
  { name: "Content Writer", id: 4 },
  { name: "UI/UX", id: 5 },
  { name: "Web developer", id: 6 },
];

export default function Home({navigation}:any) {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.heading}>Suggested Jobs</Text>
        <Text style={styles.link}>See all</Text>
      </View>
      <ScrollView horizontal>
        {jobs.map((job, index) => {
          return <JobBox key={index} {...job} navigation={navigation}/>;
        })}
      </ScrollView>
      <View style={styles.header}>
        <Text style={styles.heading}>Recent Jobs</Text>
        <Text style={styles.link}>See all</Text>
      </View>
      <ScrollView horizontal>
        {filters.map(({ name, id }) => {
          return <Jobfilter key={id} name={name} />;
        })}
      </ScrollView>
      <ScrollView horizontal style={{ marginTop: 10 }}>
        {jobs.map((job, index) => {
          return <JobBox key={index} {...job} navigation={navigation}/>;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 10,
    height: 50,
    width: "100%",
  },
  heading: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
  link: {
    color: "blue",
    fontSize: 12,
  },
});
