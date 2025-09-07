import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList.js';

export default class App extends Component{
 render(){
 return (
 <View>
 <Header title='Albums'/>
 <AlbumList/>
 </View>
 );
 }
}
AppRegistry.registerComponent('albums',()=>App);