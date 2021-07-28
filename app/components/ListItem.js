import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import colors from '../config/colors';
import AppText from './AppText';

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
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>

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
    justifyContent: 'center'
  }
})

export default ListItem;
