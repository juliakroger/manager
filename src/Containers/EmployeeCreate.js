import React, {Component} from 'react';
import {View, TextInput} from 'react-native';


class EmployeeCreate extends Component {
  render(){
    return (
      <View style={styles.container}>
      <TextInput
          style = {styles.Input}
          placeholder = 'Name'
          onChangeText={}
          value={}
      />
      <TextInput
          style = {styles.Input}
          placeholder = 'Phone 555-555-5555'
          onChangeText={}
          value={}
      />

      <Button title="Create" color="#4B2765" onPress={} />
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
  Input: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#A18AB1',
    width: 350,
    marginBottom: 10,
  }
}

export default EmployeeCreate;
