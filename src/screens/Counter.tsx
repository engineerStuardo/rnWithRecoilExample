import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useRecoilState} from 'recoil';

import {counterState} from '../recoil/counterAtom';

export const Counter = () => {
  const [counter, setCounter] = useRecoilState(counterState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.number}>{counter}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonDecrease}
          onPress={() => {
            setCounter(counter - 1);
          }}>
          <Text style={styles.addNumberText}>Decrease</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonIncrease}
          onPress={() => {
            setCounter(counter + 1);
          }}>
          <Text style={styles.addNumberText}>Increase</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  number: {
    fontSize: 19,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonDecrease: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  buttonIncrease: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNumberText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
  },
});
