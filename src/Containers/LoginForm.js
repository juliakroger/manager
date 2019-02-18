import React, {Component} from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions/actions';

import {View, Text, TextInput, Button, Alert} from 'react-native';
import Spinner from '../Components/Spinner';



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

    renderError() {
      if (this.props.error){
        return (
          <View style={{ backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
          </View>
        );
      }
    }

    renderButton(){
      if (this.props.loading){
        return <Spinner size='large'/>;
      }
      else {
        return <Button title="Login" color="#4B2765" onPress={this.onButtonPress.bind(this)} />
      }
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

          {this.renderButton()}

          {this.renderError()}
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
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
}


const mapStateToProps = state => {
  return {
    email: state.Auth.email,
    password: state.Auth.password,
    error: state.Auth.error,
    loading: state.Auth.loading,
  }
}



export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
