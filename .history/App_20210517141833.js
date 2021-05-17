
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

export default function App() {

  let [people, setPeople] = useState( [
    { name: 'shaun', key: '1' },
    { name: 'mario', key: '2' },
    { name: 'luigi', key: '3' },
    { name: 'tobi', key: '4' },
    { name: 'juji', key: '5' },
    { name: 'niko', key: '6' },
    { name: 'yuri', key: '7' },
  ] )

  return (
    <View style={styles.container}>

      <FlatList
        data={ people }
        renderItem={ ( { item } ) => (
          <Text style={ styles.item } >{ item.name }</Text>
        ) }
      />

      {/* <ScrollView>
      { people.map( (item) => (
        <View key={ item.key }>
          <Text style={ styles.item }>{ item.name }</Text>
        </View>
        )
       ) }
      </ScrollView> */}

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
