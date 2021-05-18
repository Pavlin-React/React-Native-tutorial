import { FlatList, StyleSheet, Text, View } from "react-native";
import React from 'react'

const Sandbox = () => {
  return (
    <View style={ styles.container } >
      <Text style={ styles.boxOne }>One</Text>
      <Text style={ styles.boxTwo }>Two</Text>
      <Text style={ styles.boxThree }>Three</Text>
      <Text style={ styles.boxFour }>Four</Text>
    </View>
  );
}

let styles =StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#333'
  },
  boxOne
})
 
export default Sandbox;