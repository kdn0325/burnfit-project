import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
