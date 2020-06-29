import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Animated,
} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50),
      BordAnimada: new Animated.Value(80),
      OpacidAnimada: new Animated.Value(1),
    };

    Animated.parallel([
      Animated.timing(
        this.state.LarAnimada,{
          toValue: 300,
          duration: 3000,
        }
      ),
      Animated.timing(
        this.state.AltAnimada,{
          toValue:300,
          duration:3000,
        }
      ),
      Animated.timing(
        this.state.BordAnimada,{
          toValue: 300,
          duration:5000
        }
      ),
      Animated.timing(
        this.state.OpacidAnimada,{
          toValue:0,
          duration: 7000
        }
      )
    ]).start();

    /*  animação apenas na horizontal
    Animated.timing(
      this.state.LarAnimada,{
        toValue: 300,
        duration: 2000
      }
    ).start();
    */
  }

  render(){
    return(
      <View style={styles.container}>

        <Animated.View style={{width: this.state.LarAnimada, height: this.state.AltAnimada,
                              borderRadius:this.state.BordAnimada,
                              backgroundColor: '#4169E1',
                              justifyContent: 'center',
                              opacity: this.state.OpacidAnimada}}>

          <Text style={{color: '#FFFFFF', fontSize: 22, textAlign: 'center'}}>Carregando...</Text>

        </Animated.View>

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
  animacao:{
    
  }
});