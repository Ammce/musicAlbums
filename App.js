/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

//Imoorting Components

import Header from './components/header/Header';
import AlbumList from './components/album/AlbumList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  render() {
    console.log(this.state);
    return (
      <View>
        <Header headerText={"Albums"} />
        <AlbumList />
      </View>
    );
  }
}

