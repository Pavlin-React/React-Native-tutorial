
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {

  let [name, setName] = useState( 'Mario' )
  let [age, setAge] = useState( 33 )

  return (
    <View style={styles.container}>
      <Text>Enter name: </Text>
      <TextInput style= />

      <Text>name: { name }, age: { age }</Text>
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
