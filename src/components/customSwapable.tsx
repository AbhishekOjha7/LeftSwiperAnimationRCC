import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {normalize} from '../utils/dimensions';
import {images} from '../utils/images';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomSwapable = (props: any) => {
  const ref: any = useRef();
  const anim = useRef(new Animated.Value(0)).current;

  // const animationFunction = val => {
  //   Animated.timing(anim, {
  //     toValue: val,
  //     duration: 1000,
  //     useNativeDriver: true,
  //   }).start();
  // };

  //============>>>>>>LEFT SWIPER HANDLER<<<<<<<<<<<===================
  const leftSwipe = (progress: any, dragX: any) => {
    console.log('progress', progress);

    // const scale = dragX.interpolate({
    //   inputRange: [0, 100],
    //   outputRange: [0, 1],
    //   // extrapolate: 'clamp',
    // });
    return (
      <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Animated.Image source={images.delete} style={styles.deleteicon} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderCard = () => {
    return (
      <Animated.View
        style={[
          styles.container,
          // {
          //   transform: [
          //     {
          //       translateX: anim.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: [0, -100],
          //       }),
          //     },
          //   ],
          // },
        ]}>
        <Image style={styles.cardimg} source={props.data.img} />
        <View style={styles.cardtxt}>
          <Text>{props.data.head}</Text>
          <Text>{props.data.title}</Text>
          <Text>{props.data.price}.</Text>
          <Text>{props.data.Delivery}.</Text>
          <TouchableOpacity
            onPress={() => {
              console.log('row', ref.current);
              ref.current.openRight();
              // anim.addListener(x => {
              //   console.log('Value of x is', x);
              // });
              // animationFunction(anim._value == 1 ? 0 : 1);
            }}>
            <Image style={{height: 25, width: 30}} source={images.cross} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        ref={ref}
        overshootRight={false}
        renderRightActions={leftSwipe}>
        {renderCard()}
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default CustomSwapable;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
    padding: normalize(8),
    flexDirection: 'row',
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(100),
    height: normalize(120),
  },
  deleteicon: {
    height: normalize(40),
    width: normalize(30),
  },
  cardimg: {
    height: normalize(80),
    width: normalize(70),
    resizeMode: 'contain',
  },
  cardtxt: {
    margin: normalize(5),
    left: normalize(10),
  },
});
