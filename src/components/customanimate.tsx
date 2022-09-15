import React, {useRef} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  PanResponder,
  Text,
  Image,
} from 'react-native';
import {normalize} from '../utils/dimensions';

const Pan = (props: any) => {
  const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  console.log('onMove', pan.x);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: e => {
        console.log('grant', e.nativeEvent.locationX);
        pan.setOffset({
          // @ts-ignore
          x: pan.x._value,
          // @ts-ignore
          y: pan.y._value,
        });
      },

      onMoveShouldSetPanResponderCapture: e => {
        console.log('onmove should', e.nativeEvent.locationX);
        return true;
      },

      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),

      //   onPanResponderRelease: () => {
      //     pan.flattenOffset();
      //   },
    }),
  ).current;

  const renderCard = () => {
    return (
      <View style={styles.innerview}>
        <Image style={styles.cardimg} source={props.data.img} />
        <View style={styles.txthead}>
          <Text>{props.data.head}</Text>
          <Text>{props.data.title}</Text>
          <Text>{props.data.price}</Text>
          <Text>{props.data.Delivery}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}],
          width: '100%',
        }}
        {...panResponder.panHandlers}>
        {/* <View style={styles.box} /> */}
        {renderCard()}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  innerview: {
    flexDirection: 'row',
    marginTop: normalize(10),
    width: '100%',
    borderWidth: 1,
  },
  cardimg: {
    height: normalize(80),
    width: normalize(70),
    margin: normalize(10),
    resizeMode: 'contain',
  },
  txthead: {
    left: normalize(20),
    justifyContent: 'center',
  },
});

export default Pan;
