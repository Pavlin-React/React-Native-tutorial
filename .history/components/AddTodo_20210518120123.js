import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import React, { useState } from 'react'

const AddTodo = () => {

  let [text, setText] = useState( '' )
  let changeHandler = ( va ) => {
    useState( value )
  }

  return (
    <View>
      <TextInput
        placeholder='new todo'
        onChangeText={ changeHandler }
      />
    </View>
  );
}

export default AddTodo;