import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Screen from './Screen';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({ icon, placeholder, items, onSelectItem, selectedItem, numberOfColumns = 1, width = '100%', PickerItemComponent = PickerItem }) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && <MaterialCommunityIcons name={icon} size={25} color={defaultStyles.colors.medium} style={styles.icon} />}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          < MaterialCommunityIcons name='chevron-down' size={25} color={defaultStyles.colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='close' onPress={() => setModalVisible(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={item => item.label}
            numColumns={numberOfColumns}
            renderItem={({ item }) => <PickerItemComponent
              item={item}
              label={item.label}
              onPress={() => {
                setModalVisible(false)
                onSelectItem(item)
              }}></PickerItemComponent>}></FlatList>
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
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1
  }
})

export default AppPicker;
