import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers/reducers';
import LoginForm from './LoginForm';


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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (

      <Provider store={store}>
          <LoginForm />
      </Provider>
    );
  }
}


export default App;