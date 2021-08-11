import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles';

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={25} color={defaultStyles.colors.medium} style={styles.icon} />}
      <TextInput placeholderTextColor={defaultStyles.colors.medium} style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center'
  },
  textInput: defaultStyles.text,
  icon: {
    marginRight: 10
  }
})

export default AppTextInput;
