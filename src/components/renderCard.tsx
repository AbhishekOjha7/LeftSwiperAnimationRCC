import {
  Image,
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewProps,
  ImageSourcePropType,
} from 'react-native';
import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {images} from '../utils/images';
import {COLOR} from '../utils/colors';
import {normalize} from '../utils/dimensions';

interface cardProps {
  data: any;
  indexCard?: number | undefined;
  defaultIndex?: number | undefined;
  CardImgstyle: any;
  CardtxtStyle?: StyleProp<ViewProps>;
  txtcolorStyle?: StyleProp<ViewProps>;
  titleStyle?: StyleProp<ViewProps>;
  priceStyle?: StyleProp<ViewProps>;
  pricetxtStyle?: StyleProp<ViewProps>;
  cutpricetxtStyle?: StyleProp<ViewProps>;
  deliveryviewStyle?: StyleProp<ViewProps>;
  deliverytxtStyle?: StyleProp<ViewProps>;
  crossImage: ImageSourcePropType;
  crossimgStyle: any;
}

const RenderCard = React.forwardRef((props: cardProps, ref: any) => {
  const {
    CardImgstyle,
    data,
    indexCard,
    defaultIndex,
    CardtxtStyle,
    txtcolorStyle,
    priceStyle,
    pricetxtStyle,
    cutpricetxtStyle,
    deliveryviewStyle,
    deliverytxtStyle,
    crossImage,
    crossimgStyle,
  } = props;
  useEffect(() => {
    if (defaultIndex == indexCard) {
      setTimeout(() => {
        ref?.current?.openRight();
      }, 1000);
    }
  }, [ref]);

  const openRight = () => {
    ref?.current?.openRight();
  };
  return (
    <View style={styles.rendercontainer}>
      <Image style={[styles.cardimg, CardImgstyle]} source={data.img} />
      <View style={[styles.cardtxt, CardtxtStyle]}>
        <Text style={[styles.txtcolor, txtcolorStyle]}>{data.head}</Text>
        <Text style={[styles.txtcolor, txtcolorStyle]}>{data.title}</Text>
        <View style={[styles.price, priceStyle]}>
          <Text style={[styles.pricetxt, pricetxtStyle]}>{data.price} </Text>
          <Text style={[styles.cutpricetxt, cutpricetxtStyle]}>
            {data.cutprice}
          </Text>
        </View>
        <View style={[styles.deliveryview, deliveryviewStyle]}>
          <Text style={[styles.txtcolor, txtcolorStyle]}>{data.Delivery}</Text>
          <Text style={[styles.deliverytxt, deliverytxtStyle]}>
            {data.Date}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={openRight}>
        <Image style={[styles.crossimg, crossimgStyle]} source={crossImage} />
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
