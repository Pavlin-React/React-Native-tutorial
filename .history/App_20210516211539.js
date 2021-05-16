
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {

  let [name, setName] = useState( 'Mario' )
  let [person, setPerson] = useState( { name: mario,  } )

  let clickHandler = () => {
    setName( 'luigi' )
  }

  return (
    <View style={styles.container}>
      <Text>My name is { name }</Text>
      <Text></Text>
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
