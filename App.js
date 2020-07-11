/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: '#f20',
            flex: 1,
            flexDirection : 'column',
            justifyContent : 'center',
            alignItems : 'flex-end'
          }}>
          <Text style={{backgroundColor: 'yellow'}}>View1</Text>

          <Text style={{backgroundColor: 'green'}}>View2</Text>
        </View>
      </SafeAreaView>
    );
  }
}
