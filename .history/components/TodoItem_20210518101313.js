import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from 'react'

const TodoItem = ( { item } ) => {
  return (
    <TouchableOpacity>
      <Text style={ styles.item }>{ item.text }</Text>
    </TouchableOpacity>
  );
}

let styles = StyleSheet.create( {
  
} )
 
export default TodoItem;