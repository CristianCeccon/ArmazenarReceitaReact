import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View } from 'react-native';
import Title from './src/components/Title/index';
import Main from './src/components/Main/index';
import Login from './src/components/Login/index';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      <Title/>
      <Main/>
      {/* <Text>FaceCook!</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
