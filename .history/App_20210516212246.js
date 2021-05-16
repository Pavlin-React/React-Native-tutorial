
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {

  let [name, setName] = useState( 'Mario' )
  let [age, setAge] = use

  let clickHandler = () => {
    setName( 'luigi' )
    setPerson( { name: 'luigi', age: 33 } )
  }

  return (
    <View style={styles.container}>
      <Text>name: { person.name }, age: { person.age }</Text>
      <View style={ styles.buttonContainer }>
        <Button title='click me' onPress={ clickHandler }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  }
});
