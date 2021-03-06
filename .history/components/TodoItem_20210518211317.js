import { StyleSheet, Text, TouchableOpacity, Vew } from "react-native";`
import { MaterialIcons } from '@expo/vector-icons';`
import React from 'react'

const TodoItem = ( { item, pressHandler } ) => {
  return (
    <TouchableOpacity onPress={ ()  => pressHandler( item.key ) }>
      <View style = { styles.item }>
        <MaterialIcons name="delete" size={24} color="black" />
        <Text style={ styles.item }>{ item.text }</Text>  
      </View>
    </TouchableOpacity>
  );
}

let styles = StyleSheet.create( {
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  }
} )
 
export default TodoItem;