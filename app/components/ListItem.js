import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import colors from '../config/colors';
import AppText from './AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={colors.light}>

        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image}></Image>}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons name='chevron-right' size={25} color={colors.medium} />

        </View>
      </TouchableHighlight>
    </Swipeable>


  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  title: {
    fontWeight: '600'
  },
  subTitle: {
    color: colors.medium
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1
  }
})

export default ListItem;
