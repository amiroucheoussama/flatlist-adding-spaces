/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
    View
} from 'react-native';

function App(): React.JSX.Element {
  const generateRandomArray = (size: number): number[] => {
    let arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
  }

  const generatedArray = generateRandomArray(400);

  return (
    <SafeAreaView>
      <View style={{backgroundColor:'yellow'}}>
        <FlatList
           horizontal
           data={generatedArray}
           renderItem={({ item }) => <View style={{height:30, width:30, backgroundColor:'red'}}/>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
