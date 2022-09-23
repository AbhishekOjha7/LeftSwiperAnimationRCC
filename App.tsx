import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StyleSheet, FlatList} from 'react-native';
import {data} from './src/utils/mockUpdate';
import CustomSwapable from './src/components/customSwapable';
import {images} from './src/utils/images';
import {normalize} from './src/utils/dimensions';
import {COLOR} from './src/utils/colors';

const App = () => {
  const [lists, setLists] = useState(data);

  const deleteItem = (index: any) => {
    const arr = [...lists];
    arr.splice(index, 1);
    setLists(arr);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={lists}
        renderItem={({item, index}) => {
          return (
            <CustomSwapable
              indexCard={index}
              defaultIndex={item?.isOutOfStock ? index : undefined}
              data={item}
              handleRight={() => {
                deleteItem(index);
              }} //  handle right swipe
              leftimage={images.delete} //    handle left image
              rightimg={images.question} //     handle right image
              //left //      left swipeable
              right //  right swipeable
              // leftSwipeStyle={{width: 200, backgroundColor: 'green'}} //styling for left swipe
              // rightSwipeStyle={{width: 180, backgroundColor: 'red'}}    // styling for right swipe
            />
          );
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.seperatorLine}></View>;
        }}
      />
    </SafeAreaView>
  );
};

export default App;

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
    marginHorizontal: normalize(40),
  },
  txtcolor: {
    color: COLOR.BLACK,
  },
});
