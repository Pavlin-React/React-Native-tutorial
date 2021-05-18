import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


const TodoItem = ( { item, pressHandler } ) => {
  return (
    <TouchableOpacity onPress={ ()  => pressHandler( item.key ) }>
      <View style = { styles.item }>
        <MaterialIcons name="delete" size={24}/>
        <Text style={ styles.item }>{ item.text }</Text>
      </View>
    </TouchableOpacity>
  );
}

let styles = StyleSheet.create( {
  item: {
    flexDirection: 'row'
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  }
} )
 
export default TodoItem;