import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";

//header component
import Header from "./Components/Header";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => {
            return {
              // headerLeft: () => <HeaderLeft navigation={navigation} />,   
              headerTitle: () => <Header />,
              //headerRight: () => <HeaderRight navigation={navigation} />,
            };
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
