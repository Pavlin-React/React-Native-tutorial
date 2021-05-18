import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import React, { useState } from 'react'

const AddTodo = () => {
  return (
    <View>
      <TextInput
        placeholder='new todo'
        title="Add Todo"
      />
    </View>
  );
}
 
export default AddTodo;