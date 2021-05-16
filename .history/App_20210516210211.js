
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {

  let [name, setName] = useState( 'Mario' )

  return (
    <View style={styles.container}>
      <Text>My name is { name }</Text>
      <Text></Text>
      <View style={ styles.button  }>

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
});
