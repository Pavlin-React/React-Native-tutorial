import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from 'react'

const TodoItem = ( { item, pressHandler } ) => {
  return (
    <TouchableOpacity onPress={ ()  => pressHandler( item.key ) }>
      <View>
        
      </View>
    </TouchableOpacity>
  );
}

let styles = StyleSheet.create( {
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  }
} )
 
export default TodoItem;