import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle, Logo } = styles;
  return (
    <View style={viewStyle}> 
      <Text style={textStyle}>{props.NavText}</Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    backgroundColor:'#348686',
    height: 70,
    paddingTop: 35,
    width: '100%',
    alignItems: 'center',


  },
  textStyle: {
    fontSize: 20
  }
}

export default Header;