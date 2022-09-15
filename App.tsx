import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, FlatList, Text} from 'react-native';
import {data} from './src/utils/newData';
import CustomSwapable from './src/components/customSwapable';
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
              data={item}
              handleDelete={() => deleteItem(index)}
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
    backgroundColor: 'black',
  },
});
