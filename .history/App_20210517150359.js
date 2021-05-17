
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {

  let [people, setPeople] = useState( [
    { name: 'shaun', id: '1' },
    { name: 'mario', id: '2' },
    { name: 'luigi', id: '3' },
    { name: 'tobi', id: '4' },
    { name: 'juji', id: '5' },
    { name: 'niki', key: '6' },
    { name: 'yuri', key: '7' },
    { name: 'baba', key: '8' },
    { name: 'browser', key: '9' },
    { name: 'toni', key: '10' },
  ] )

  return (
    <View style={styles.container}>

      <FlatList
        data={ people }
        renderItem={ ( { item } ) => (
          <Text style={styles.item }>{ item.name }</Text>
        ) }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});
