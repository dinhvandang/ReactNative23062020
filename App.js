/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Main from './src/screen';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#f20',
            flex: 1,
            flexDirection: 'column',
          }}>
          <View
            style={{
              backgroundColor: 'red',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>A</Text>
          </View>
          <View
            style={{
              backgroundColor: 'green',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>B</Text>
          </View>
          <View
            style={{
              backgroundColor: 'blue',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>C</Text>
          </View>
          <View
            style={{
              backgroundColor: 'orange',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>D</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            flex: 1,
            flexDirection: 'row',
          }}>
          <View
            style={{
              backgroundColor: 'red',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>A</Text>
          </View>
          <View
            style={{
              backgroundColor: 'green',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>B</Text>
          </View>
          <View
            style={{
              backgroundColor: 'blue',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>C</Text>
          </View>
          <View
            style={{
              backgroundColor: 'orange',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>D</Text>
          </View>
        </View>
      </SafeAreaView>

<SafeAreaView style={styles.container}>
<View style={styles.flexBoxColum}>
  <Text 
    style={[
      styles.textStyle,
      {backgroundColor : `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}]}>
      Red
  </Text>
  <Text 
    style={[
      styles.textStyle,
      {backgroundColor : `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}]}>
      Green
  </Text>
  <Text 
    style={[
      styles.textStyle,
      {backgroundColor : `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}]}>
      Blue
  </Text>
  <Text 
    style={[
      styles.textStyle,
      {backgroundColor : `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}]}>
      Orange
  </Text>
  <Text 
    style={[
      styles.textStyle,
      {backgroundColor : `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}]}>
      Gray
  </Text>
  <Text 
    style={[
      styles.textStyle,
      {backgroundColor : `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}]}>
      Pink
  </Text>
</View>
</SafeAreaView>
)
}
}


const styles = StyleSheet.create({
container : {
flex : 1,
justifyContent: 'center',
alignItems : 'center'
},
textStyle: {
color : 'black',
fontSize : 20,
textAlign: 'left'
}

}) 