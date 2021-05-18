import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import React, { useState } from 'react'

const AddTodo = ({ subm }) => {

  let [text, setText] = useState('')

  let changeHandler = ( value ) => {
    setText( value )
  }

  let pressHandler = () => {

  }

  return (
    <View>
      <TextInput
        style = {styles.input}
        placeholder='new todo'
        onChangeText={changeHandler}
      />
      <Button onPress = {() => console.log(text)} title='add todo' color='coral'/>
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