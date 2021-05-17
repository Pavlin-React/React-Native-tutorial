import { FlatList, StyleSheet, Text, View } from "react-native";
import React from 'react'

const Header = () => {
  return (
    <View style={ styles.header }>
      <Text style={ styles.title }>My Todos</Text>
    </View>
  );
}

let styles = StyleSheet.create( {
  header: {
    height: 80,
    paddingTop: 34,
    backgroundColor: 'coral',
  },
  title: {
    
  }
} )
 
export default Header;