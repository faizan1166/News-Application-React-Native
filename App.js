import React, { useEffect } from 'react';
import {StatusBar, Text, View, Dimensions} from 'react-native';
import AppNavigator from './screens/AppNavigator';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  
  return (
    <View
      style={{flex: 1, width: windowWidth, height: 300, height: windowHeight}}>
      <StatusBar backgroundColor="#9e2b23" />
    <AppNavigator/>
    </View>
  );
};

export default App;
