// Android code goes here!

import React from "react";
import { Text } from "react-native";
import { AppRegistry } from "react-native";
// Import a library to help create a component

// Create a component
const App = ()=>{
    return <Text>Fuck yo albums!</Text>;
};

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
