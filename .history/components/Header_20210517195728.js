import { FlatList, StyleSheet, Text, View } from "react-native";
import Rea

const Header = () => {
  return (
    <View style={ styles.header }>
      <Text style={ styles.title }>My Todos</Text>
    </View>
  );
}

let styles = StyleSheet.create( {
  header: {
    height: 80,
    paddingTop: 34,
    backgroundColor: 'coral',
  }
} )
 
export default Header;