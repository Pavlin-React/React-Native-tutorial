import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from 'react'

const TodoItem = ( { item } ) => {
  return (
    <TouchableOpacity onPress+>
      <Text style={ styles.item }>{ item.text }</Text>
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