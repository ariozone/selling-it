import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>

      <View style={styles.container}>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons name='trash-can' color={colors.white} size={35}></MaterialCommunityIcons></View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger, width: '20%', justifyContent: 'center',
    alignItems: 'center'
  }
})
export default ListItemDeleteAction;
