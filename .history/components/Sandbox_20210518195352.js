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
    backgroundColor: '#ddd'
  },
  boxOne: {
    padding: 10,
    backgroundColor: 'pink',
  },
  boxTwo: {
    padding: 10,
    backgroundColor: 'yellow',
  },
  boxThree: {
    padding: 10,
    backgroundColor: 'blue',
  },
  boxFour: {
    padding: 10,
    backgroundColor: 'green'
  },
})
 
export default Sandbox;