// import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';
// import Data from './src/utils/data';
// import CustomSwapable from './src/components/customSwapable';
// import Pan from './src/components/customanimate';

// const App = () => {
//   const [list, Setlist] = useState(Data);
//   const _itemSeparator = () => {
//     return <View style={styles.separatorcontainer}></View>;
//   };
//   const deleteItem = (index: any) => {
//     const arr = [...list];
//     arr.splice(index, 1);
//     Setlist(arr);
//   };
//   return (
//     <SafeAreaView>
//       <FlatList
//         data={list}
//         renderItem={({item, index}) => {
//           return (
//             <CustomSwapable
//               data={item}
//               handleDelete={(index: any) => deleteItem(index)}
//             />
//           );
//         }}
//         ItemSeparatorComponent={_itemSeparator}
//         // bounces={false}
//         // showsVerticalScrollIndicator={false}
//       />

//       {/* <FlatList
//         data={list}
//         renderItem={({item}) => {
//           return <Pan data={item} />;
//         }}
//         ItemSeparatorComponent={_itemSeparator}
//         bounces={false}
//         showsVerticalScrollIndicator={false}
//       /> */}
//       {/* <Pan data={list[0]} /> */}
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   separatorcontainer: {
//     height: 0.5,
//     backgroundColor: 'black',
//   },
// });

import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, FlatList, Text} from 'react-native';
import ItemBox from './src/new/test';
import {data} from './src/utils/newData';

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
          return <ItemBox data={item} handleDelete={() => deleteItem(index)} />;
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
    height: 1,
    backgroundColor: 'black',
  },
});
