import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Home from "./Screens/Home";
import JobDetails from "./Screens/Jobdetails";

//header component
import Header from "./Components/Header";
import CommonHeader from "./Components/CommonHeader";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({navigation})=>{
          return {
            headerStyle: {
              backgroundColor: "#d1d0cd",
            },
            headerTitle: () => <CommonHeader navigation={navigation} />,
            headerBackVisible: false,
            headerShadowVisible: false
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={() => {
            return {
              // headerLeft: () => <HeaderLeft navigation={navigation} />,
              headerTitle: () => <Header />,
              headerStyle: {
                backgroundColor: 'white'
              }
              //headerRight: () => <HeaderRight navigation={navigation} />,
            };
          }}
        />
        <Stack.Screen name="Jobdetails" component={JobDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
