import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';




class App extends Component{
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyBHp1R48zzfDxIeA1IhlRDVk3H93Dtip78',
      authDomain: 'manager-5e10d.firebaseapp.com',
      databaseURL: 'https://manager-5e10d.firebaseio.com',
      projectId: 'manager-5e10d',
      storageBucket: 'manager-5e10d.appspot.com',
      messagingSenderId: '132314642014',
    };
    firebase.initializeApp(config);

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
};


export default App
