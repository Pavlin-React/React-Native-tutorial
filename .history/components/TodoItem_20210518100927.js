import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from 'react'

const TodoItem = ( { item } ) => {
  return (
    <TouchableOpacity>
      <Text>{ item.text }</Text>
    </TouchableOpacity>
  );
}

let styles = StyleSheet.create( {
  padding: 16
} )
 
export default TodoItem;