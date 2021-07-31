import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Screen from './Screen';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

function AppPicker({ icon, placeholder, ...otherProps }) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && <MaterialCommunityIcons name={icon} size={25} color={defaultStyles.colors.medium} style={styles.icon} />}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons name='chevron-down' size={25} color={defaultStyles.colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>

          <Button title='close' onPress={() => setModalVisible(false)}></Button>
        </Screen>
      </Modal>
    </>
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
  },
  text: { flex: 1 },
  modal: {
    backgroundColor: 'blue'
  }
})

export default AppPicker;
