
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

  return (
    <View style={styles.container}>

      <FlatList
        keyExtractor={ ( item ) => item.id }
        data={ people }
        renderItem={ ( { item } ) => (
          <TouchableOpacity onPress={() => handlePress(item.id)}>
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
