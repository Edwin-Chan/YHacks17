import React, { Component } from 'react';
import { WebView } from 'react-native';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing
} from 'react-native';

const timing = 4000

export default class Animations extends React.Component {

  constructor(props) {
    super(props)
    this.spinValue = new Animated.Value(0);
    this.state = {
      isLoading: true,
      info: "info"
    };
  }
  componentWillUpdateProp(){
    this.setState({
      isLoading: true
    });
  }
  componentWillReceiveProps(){
    console.warn("in!!!!!!");
  }
  componentDidMount () {
    this.spin()
    fetch("https://fls2ijcvc3.execute-api.us-east-1.amazonaws.com/1stage", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key1: "value1",
        key2: "value2",
        key3: "value3"
      })
    })
    .then(response => {
      // console.warn(response);
      // navigate("Homescreen")
      this.setState({
        isLoading: false,
        info: response._bodyText
      });
    })
    .catch(error => {
      console.error(error);
    });
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: timing,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render () {
    const { navigate } = this.props.navigation;
    if (!this.state.isLoading){
      module.exports = this.state.info;

      return (
        <View style={styles.container,{ height: 1000 }}>
        <Text></Text>
        <Text></Text>
          <Text  style={{fontSize: 15}}>{this.state.info}</Text>
         <WebView source={{uri: 'http://35.227.23.204:5601/app/kibana#/dashboard/fd5260a0-d7bb-11e7-bec3-07dcc699d8d9?embed=true&_g=()' }}
        style={{}}  />
      </View>
      );
    }
    
    // const getStartValue = () => '0deg'
    // const getEndValue = () => '360deg'
    // const spin = this.spinValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [getStartValue(), getEndValue()]
    // })
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{ width: 227, height: 200, transform: [{rotate: spin}] }}
          source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
