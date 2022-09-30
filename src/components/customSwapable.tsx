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
 * @props (friction) it is used for delayed compared to the gesture distance
 * @props (leftThresold) it is used for left edge at which released panel will animate to the open state by default it's a half of the panel width
 * @props (rightThresold) it is used for right edge at which released panel will animate to the open state by default it's a half of the panel width
 * @props (overshootright) it is  boolean value  if the swipeable panel can be pulled further than the right actions panel's width. It is set to true by default as long as the right panel.
 * @props (onSwipeableOpen) Called when action panel is closed
 * @props  (onSwipeableWillOpen)  Called when action panel starts animating on close.
 * @props  (openRight) method that opens component on right side. it takes references
 */

import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewProps,
  Animated,
  ImageSourcePropType,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {COLOR} from '../utils/colors';
import {normalize} from '../utils/dimensions';
import {images} from '../utils/images';
import RenderCard from './renderCard';

interface Props {
  data: any;
  leftimage: ImageSourcePropType;
  rightimage: ImageSourcePropType;
  handleRight?: any;
  rightMove?: boolean;
  leftMove?: boolean;
  openLeft?: () => void;
  openRight?: () => void;
  overshootRight?: boolean;
  overshootLeft?: boolean;
  indexCard?: number | undefined;
  defaultIndex?: number | undefined;
  friction?: number | undefined;
  leftThreshold?: number | undefined;
  rightThreshold?: number | undefined;
  leftSwipeStyle?: StyleProp<ViewProps>;
  rightSwipeStyle?: StyleProp<ViewProps>;
  onSwipeableOpen?: (direction: 'left' | 'right') => void;
  onSwipeableClose?: (direction: 'left' | 'right') => void;
  onSwipeableWillOpen?: (direction: 'left' | 'right') => void;
}
const CustomSwapable = (props: Props) => {
  const {
    leftimage,
    rightMove,
    leftMove,
    rightimage,
    indexCard,
    defaultIndex,
    friction,
    leftThreshold,
    rightThreshold,
    onSwipeableOpen,
    onSwipeableWillOpen,
    overshootRight = false,
    overshootLeft = false,
    onSwipeableClose,
    handleRight,
    rightSwipeStyle,
    leftSwipeStyle,
  } = props;
  const ref: any = useRef();
  //============>>>>>>LEFT SWIPER HANDLER<<<<<<<<<<<===================
  const leftSwipe = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
    });
    return (
      <TouchableOpacity onPress={handleRight} activeOpacity={0.6}>
        <Animated.View
          style={[
            styles.deleteBox,
            leftSwipeStyle,
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
      <View style={[styles.undobox, rightSwipeStyle]}>
        <Image source={rightimage} style={styles.deleteicon} />
      </View>
    );
  };
  return (
    <GestureHandlerRootView>
      <Swipeable
        ref={ref}
        overshootRight={overshootRight}
        overshootLeft={overshootLeft}
        renderRightActions={rightMove ? leftSwipe : () => null}
        renderLeftActions={leftMove ? rightSwipe : () => null}
        friction={friction}
        leftThreshold={leftThreshold}
        rightThreshold={rightThreshold}
        onSwipeableOpen={onSwipeableOpen}
        onSwipeableWillOpen={onSwipeableWillOpen}
        onSwipeableClose={onSwipeableClose}>
        <RenderCard
          ref={ref}
          data={props.data}
          indexCard={indexCard}
          defaultIndex={defaultIndex}
          CardImgstyle={{}}
          CardtxtStyle={{}}
          txtcolorStyle={{}}
          crossImage={images.cross}
          crossimgStyle={{}}
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
