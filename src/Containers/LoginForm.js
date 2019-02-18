import React, {Component} from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions/actions';

import {View, Text, TextInput, Button, Alert} from 'react-native';




class LoginForm extends Component {

    onEmailChange(text){
      this.props.emailChanged(text);
    }

    onPasswordChange(text){
      this.props.passwordChanged(text);
    }

    onButtonPress(){
      const { email, password } = this.props;
      this.props.loginUser({email, password})
    }

  render(){

    const { container, textStyle, Input } = styles;
    return (
      <View style = {container}>
        <Text style={textStyle}>Login/Register</Text>
        <TextInput
            style = {Input}
            autoCapitalize = 'none'
            placeholder = 'user@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
        />
        <TextInput
            style = {Input}
            secureTextEntry={true}
            placeholder='password'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
         />
          <Button
           title="Login"
           color="#4B2765"
           onPress={this.onButtonPress.bind(this)}
          />


      </View>

    );
  }
}


const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  textStyle: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 20,
  },
  Input: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#A18AB1',
    width: 350,
    marginBottom: 10,
  }
}


const mapStateToProps = state => {
  return {
    email: state.Auth.email,
    password: state.Auth.password
  }
}



export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
