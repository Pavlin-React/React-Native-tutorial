import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import React, { useState } from 'react'

const AddTodo = () => {

  let [text, setText] = useState('')

  let changeHandler = ( value ) => {
    setText( value )
  }

  return (
    <View>
      <TextInput
        style = {styles.input}
        placeholder='new todo'
        onChangeText={changeHandler}
      />
      <Button />
    </View>
  );
}

let styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
})

export default AddTodo;