/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ImgDemo from './ImageDemo.js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  NavigatorIOS,
} from 'react-native';
var imgs=[
  'http://www.ituring.com.cn/bookcover/1442.796.jpg',
  'http://www.ituring.com.cn/bookcover/1668.553.jpg',
  'http://www.ituring.com.cn/bookcover/1521.260.jpg',
];
class  Navi extends Component{
  render() {
    return(
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          component: Touchable_Demo,
          title: '首页',
          passProps: {},
        }}
      />
    );
  }
}

class Touchable_Demo extends Component {
  show(text) {
    alert(text);
  }
  goTo() {
    this.props.navigator.push({
      component: MyImage,
      title: 'imgDemo',
    });
  }
  render() {
    return (
      <View style ={styles.flex}>
        <View>
          <TouchableHighlight
            onPress={this.show.bind(this,'React Native')}
            underlayColor="#E1F6FF">
              <Text style={styles.item}>React Native入门实践</Text>
            </TouchableHighlight>
          <TouchableHighlight onPress={this.show.bind(this,'图灵出版社')} underlayColor="#E1F6FF">
            <Text style={styles.item}>图灵出版社</Text>
          </TouchableHighlight>
          <TouchableOpacity onPress={this.show.bind(this, '新的世界新的梦想')} >
            <Text style={styles.item}>新的世界新的梦想</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goTo.bind(this)}>
            <View style={styles.btn}>
              <Text style={{fontSize: 25, color: '#fff'}}>按钮</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class MyImage extends Component {
  render(){
      return(
        <View style={styles.flex}>
          <ImgDemo imgs={imgs}></ImgDemo>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    marginTop: 65,
  },
  item: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
    color: '#434343',
  },
  btn: {
    marginLeft: 30,
    marginTop: 30,
    width: 100,
    height: 100,
    backgroundColor: '#18B4FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  }
});

AppRegistry.registerComponent('Touchable_Demo', () => Navi);
