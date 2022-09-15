import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {normalize} from '../utils/dimensions';
import {images} from '../utils/images';

const SCREEN_WIDTH = Dimensions.get('window').width;

const ItemBox = (props: any) => {
  const leftSwipe = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      // extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          {/* <Animated.Text style={{transform: [{scale: scale}]}}>
            Delete
          </Animated.Text> */}
          <Animated.Image
            source={images.delete}
            style={[{height: 40, width: 40}]}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Swipeable renderRightActions={leftSwipe}>
      <View style={styles.container}>
        <Image style={{height: 40, width: 40}} source={props.data.img} />
        <View>
          <Text>{props.data.head}</Text>
          <Text>{props.data.title}</Text>
          <Text>{props.data.price}.</Text>
          <Text>{props.data.Delivery}.</Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default ItemBox;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
    padding: 16,
    flexDirection: 'row',
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 80,
  },
  deleteicon: {
    height: normalize(40),
    width: normalize(30),
  },
});
