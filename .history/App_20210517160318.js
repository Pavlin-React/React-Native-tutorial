
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

export default function App() {

  let [people, setPeople] = useState( [
    { name: 'shaun', id: '1' },
    { name: 'mario', id: '2' },
    { name: 'luigi', id: '3' },
    { name: 'tobi', id: '4' },
    { name: 'juji', id: '5' },
    { name: 'niki', id: '6' },
    { name: 'yuri', id: '7' },
    { name: 'baba', id: '8' },
    { name: 'browser', id: '9' },
  ] )

  let pressHandler = (id) => {
    console.log(id);
  }

  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={ ( item ) => item.id }
        data={ people }
        renderItem={ ( { item } ) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)>
            <Text style={styles.item }>{ item.name }</Text>
          </TouchableOpacity>
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
    marginHorizontal: 10,
    marginTop: 24,
  }
});
