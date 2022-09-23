/**
 * we have to install (yarn add react-native-gesture-handler)
 * GestureHandleRootView for in android swipeable
 * @props (renderCard) is used for UI design
 * @props (handleRight) is used for doing crude operation in right
 * @props (leftimage) is used for to change left icon
 * @props (rightimg) is used for to change right icon
 * @props (left) is used for handle left swipe
 * @props (right) is used for handle right swipe
 * @props (rightSwipestyle) is override styling in right side
 * @props (leftSwipestyle) is override styling in left swipe
 *
 */

import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewProps,
  Animated,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {COLOR} from '../utils/colors';
import {normalize} from '../utils/dimensions';
import RenderCard from './renderCard';
interface Props {
  overshootRight?: boolean;
  overshootLeft?: boolean;
  leftSwipeStyle?: StyleProp<ViewProps>;
  rightSwipeStyle?: StyleProp<ViewProps>;
  handleRight?: any;
  right?: boolean;
  left?: boolean;
  leftimage?: any;
  rightimg?: any;
  data?: any;
  ref?: any;
  indexCard?: number | undefined;
  defaultIndex?: number | undefined;
}

const CustomSwapable = (props: Props) => {
  const {leftimage, right, left, rightimg, indexCard, defaultIndex} = props;
  const ref: any = useRef();

  //============>>>>>>LEFT SWIPER HANDLER<<<<<<<<<<<===================
  const leftSwipe = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
    });
    return (
      <TouchableOpacity onPress={props.handleRight} activeOpacity={0.6}>
        <Animated.View
          style={[
            styles.deleteBox,
            props.leftSwipeStyle,
            {transform: [{scale: scale}]},
          ]}>
          <Image source={leftimage} style={[styles.deleteicon]} />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  //=============>>>RIGHT SWIPER HANDLER<<<<<<<<<<<<<<<<============

  const rightSwipe = () => {
    return (
      <View style={[styles.undobox, props.rightSwipeStyle]}>
        <Image source={rightimg} style={styles.deleteicon} />
      </View>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        ref={ref}
        overshootRight={false}
        overshootLeft={false}
        renderRightActions={right ? leftSwipe : () => null}
        renderLeftActions={left ? rightSwipe : () => null}>
        <RenderCard
          ref={ref}
          data={props.data}
          indexCard={indexCard}
          defaultIndex={defaultIndex}
        />
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default CustomSwapable;

const styles = StyleSheet.create({
  deleteBox: {
    backgroundColor: COLOR.RED,
    width: normalize(100),
    height: normalize(120),
  },
  deleteicon: {
    height: normalize(40),
    marginTop: normalize(34),
    width: normalize(30),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  undobox: {
    backgroundColor: COLOR.lIGHTGREEN,
    width: normalize(80),
    height: normalize(120),
  },
});
