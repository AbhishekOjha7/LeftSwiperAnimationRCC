// import {Image, StyleSheet, Text, View, Animated} from 'react-native';
// import React from 'react';
// import {vh, vw, normalize} from '../utils/dimensions';
// import Swipeable from 'react-native-gesture-handler/Swipeable';
// import {images} from '../utils/images';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// const CustomSwapable = (props: any) => {
//   const rightSwipe = (progress: any, dragX: any) => {
//     const scale = dragX.interpolate({
//       inputRange: [0, 100],
//       outputRange: [0, 1],
//       extrapolate: 'clamp',
//     });
//     return (
//       <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
//         <View style={styles.deletebox}>
//           <Animated.Image
//             style={[styles.deleteicon, {transform: [{scale: scale}]}]}
//             source={images.delete}
//           />
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <Swipeable renderRightActions={rightSwipe}>
//       {/* <View style={styles.innerview}>
//         <Image style={styles.cardimg} source={props.data.img} /> */}
//       <View style={styles.txthead}>
//         <Text>{props.data.head}</Text>
//         <Text>{props.data.title}</Text>
//         <Text>{props.data.price}</Text>
//         <Text>{props.data.Delivery}</Text>
//       </View>
//       {/* </View> */}
//     </Swipeable>
//   );
// };

// export default CustomSwapable;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   innerview: {
//     flexDirection: 'row',
//     marginTop: normalize(10),
//   },
//   cardimg: {
//     height: normalize(80),
//     width: normalize(70),
//     margin: normalize(10),
//     resizeMode: 'contain',
//   },
//   txthead: {
//     left: normalize(20),
//     justifyContent: 'center',
//   },
//   deleteicon: {
//     height: normalize(40),
//     width: normalize(30),
//   },
//   deletebox: {
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: normalize(100),
//     height: 120,
//   },
// });
