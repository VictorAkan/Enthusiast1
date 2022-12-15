import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Hello } from './screens/text';
import React from 'react';

export default function App() {
  return (
    <View className="bg-sky-200">
      {/* <Text className="text-xl font-bold">Open up App.tsx to start working on your app!</Text> */}
      <Hello />
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
