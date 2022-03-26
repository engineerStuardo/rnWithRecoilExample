import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.number}>0</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.addNumberText}>Add number</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 20,
  },
  addNumberText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
  },
});

export default App;
