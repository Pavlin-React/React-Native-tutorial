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
    
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'end',
    paddingTop: 40,
    backgroundColor: '#ddd'
  },
  boxOne: {
    padding: 10,
    backgroundColor: 'pink',
  },
  boxTwo: {
    padding: 20,
    backgroundColor: 'yellow',
  },
  boxThree: {
    padding: 30,
    backgroundColor: 'blue',
  },
  boxFour: {
    padding: 40,
    backgroundColor: 'green',
  },
})
 
export default Sandbox;