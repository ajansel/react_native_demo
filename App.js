import {StackNavigator} from 'react-navigation';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Alert } from 'react-native';
import Homescreen from './Homescreen';
import Card from './Card';

const MTGApp = StackNavigator({
  Home: { screen: Homescreen },
  Card: { screen: Card },
});

export default class App extends React.Component {
  render() {
    return <MTGApp />;
  }
}