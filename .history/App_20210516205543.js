
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {

  let [name, setName] = useState( 'mario' )

  return (
    <View style={styles.container}>
      <Text>My name is {</Text>
      <Text></Text>
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
