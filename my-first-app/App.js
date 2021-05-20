import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export class RedButton extends Component{
  render() {
    return(
<Button color="red" title="log in"></Button>
    );
  }
}






export default class App extends Component {
  render() {
    return (
        <View style={{marginTop:250,marginLeft:0}}> 
        <RedButton/>
        <Text>My first react component</Text>
        </View>
    );
  }
}