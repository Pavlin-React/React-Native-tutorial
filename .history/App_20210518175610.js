
import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Keyboard } from 'react-native'
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from './components/TodoItem'

export default function App() {

  let [todos, setTodos] = useState( [
    { text: 'buy coffeeo', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ] )

  let pressHandler = ( key ) => {
    setTodos((prev) => {
      return prev.filter(item => item.key != key)
    })
  }

  let submitHandler = (text) => {
    if ( text.length > 3 ) {
      setTodos((prev) => {
        return [
          {text, key: Math.random().toString()},
          ...prev
        ]
      })
    } else {
      Alert.alert('Ooops', 'Todo must be at least 3 chars long')
    }
  }
  
  return (
    <View style={styles.container}>
      <Header />
      <View style={ styles.content }>
        <AddTodo submitHandler={submitHandler}/>
        <View style={ styles.list }>
          <FlatList
            data={ todos }
            renderItem={( { item } ) => (
              <TodoItem item={ item } pressHandler={ pressHandler }/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
