
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {

  let [todos, setT]
  
  return (
    <View style={styles.container}>
      {/*header */}
      <View style={ styles.content }>
        {/*to form */}
        <View style={ styles.list }>
          <FlatList

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
  }
});
