import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {images} from '../utils/images';
import {COLOR} from '../utils/colors';
import {normalize} from '../utils/dimensions';

interface cardProps {
  data: any;
  indexCard: number | undefined;
  defaultIndex: number | undefined;
}

const RenderCard = React.forwardRef((props: cardProps, ref: any) => {
  const data = props?.data;
  const indexCard = props?.indexCard;
  const defaultIndex = props?.defaultIndex;

  useEffect(() => {
    if (defaultIndex == indexCard) {
      setTimeout(() => {
        ref?.current?.openRight();
      }, 1000);
    }
  }, [ref]);

  return (
    <View style={styles.rendercontainer}>
      <Image style={styles.cardimg} source={data.img} />
      <View style={styles.cardtxt}>
        <Text style={styles.txtcolor}>{data.head}</Text>
        <Text style={styles.txtcolor}>{data.title}</Text>
        <View style={styles.price}>
          <Text style={styles.pricetxt}>{data.price} </Text>
          <Text style={styles.cutpricetxt}>{data.cutprice}</Text>
        </View>
        <View style={styles.deliveryview}>
          <Text style={styles.txtcolor}>{data.Delivery}</Text>
          <Text style={styles.deliverytxt}>{data.Date}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          ref?.current?.openRight();
        }}>
        <Image style={styles.crossimg} source={images.cross} />
      </TouchableOpacity>
    </View>
  );
});

export default RenderCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperatorLine: {
    height: 0.5,
    backgroundColor: COLOR.BLACK,
  },

  rendercontainer: {
    backgroundColor: COLOR.WHITE,
    padding: normalize(8),
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
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
  price: {
    flexDirection: 'row',
    marginVertical: normalize(5),
  },
  pricetxt: {
    textDecorationLine: 'line-through',
    color: COLOR.BLACK,
  },
  cutpricetxt: {
    color: COLOR.RED,
    left: normalize(5),
  },
  deliveryview: {
    flexDirection: 'row',
  },
  deliverytxt: {
    color: COLOR.lIGHTGREEN,
  },
  crossimg: {
    height: normalize(22),
    width: normalize(22),
    tintColor: COLOR.BLACK,
    marginHorizontal: normalize(55),
  },
  txtcolor: {
    color: COLOR.BLACK,
  },
});
