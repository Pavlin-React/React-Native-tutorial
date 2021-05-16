
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {

  let [people, setPeople] = useState( [
    { name: 'shaun', key: '1' }
    { name: 'mario', key: '2' }
    { name: 'luigi', key: '3' }
    { name: 'tobi', key: '4' }
    { name: 'juji', key: '5' }
    { name: '', key: '6' }
    { name: 'shaun', key: '7' }
  ] )

  return (
    <View style={styles.container}>
      
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
