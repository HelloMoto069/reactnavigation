import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StackNav from './StackNav';
import TabNav from './TabNav';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Hi</Text> */}
      <StackNav/>
      <TabNav/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});