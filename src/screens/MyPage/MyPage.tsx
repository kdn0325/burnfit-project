import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MyPage</Text>
    </SafeAreaView>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
