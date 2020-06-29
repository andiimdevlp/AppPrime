import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Animated,
} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>

          <Text style={{fontSize: 22, textAlign: 'center'}}>Em construção...</Text>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});