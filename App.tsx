/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {SafeAreaView, View} from 'react-native';
import {Button, Input} from './src';

function App(): React.JSX.Element {
  const [text, setText] = useState('');
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 50}}>
        <Button onPress={() => console.log('pressing')} title="Button" />
        <View style={{marginTop: 30}}>
          <Input placeholder="Test" value={text} onChange={setText} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
