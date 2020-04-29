import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = ({item, deleteItem}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.text}</Text>
                <MaterialIcons name='close' size={20} color="firebrick"
                onPress={() => deleteItem(item.id)}/>
            </View>
            
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
  listItem: {
      paddingTop: 15,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderColor: '#eee',
  },
  listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  listItemText: {
      fontSize: 18
  }
})

export default ListItem;