import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from 'react'

const TodoItem = ( { item } ) => {
  return (
    <TouchableOpacity>
      <Text>{ item.text }</Text>
    </TouchableOpacity>
  );
}

 
export default TodoItem;