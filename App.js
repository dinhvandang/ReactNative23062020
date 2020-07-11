/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}>
          <Text style={{backgroundColor: 'red', flex: 1, textAlign: 'center'}}>
            A
          </Text>
          <Text style={{backgroundColor: 'blue', flex: 1, textAlign: 'center'}}>
            B
          </Text>
          <Text style={{backgroundColor: 'gray', flex: 1, textAlign: 'center'}}>
            C
          </Text>
          <Text style={{backgroundColor: 'yellow', flex: 1, textAlign: 'center'}}>
            D
          </Text>
        </View>

        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Text style={{backgroundColor: 'blue', flex: 1, textAlign: 'center'}}>
            A
          </Text>
          <Text style={{backgroundColor: 'red', flex: 1, textAlign: 'center'}}>
            B
          </Text>
          <Text style={{backgroundColor: 'gray', flex: 1, textAlign: 'center'}}>
            C
          </Text>
          <Text
            style={{backgroundColor: 'orange', flex: 1, textAlign: 'center'}}>
            D
          </Text>
        </View> */}
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 0.1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}>
          <Text style={{backgroundColor: 'red', flex: 1, textAlign: 'center'}}>
            1
          </Text>
        </View>

        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{backgroundColor: 'yellow', flex: 1, textAlign: 'center'}}>
            2
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}
