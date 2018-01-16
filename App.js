import {StackNavigator} from 'react-navigation';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Alert } from 'react-native';
import Setscreen from './Setscreen';
import Card from './Card';

const MTGApp = StackNavigator({
  Set: { screen: Setscreen },
  Card: { screen: Card },
});

export default class App extends React.Component {
  render() {
    return <MTGApp />;
  }
}