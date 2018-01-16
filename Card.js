import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Alert, Image } from 'react-native';

export default class Card extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.card.name}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { card } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={[styles.header, styles.bold]} >{card.name}</Text>
        <Text style={styles.listItem} ><Text style={styles.boldAndUnderlined}>Colors:</Text> {card.colors}</Text>
        <Text style={styles.listItem} ><Text style={styles.boldAndUnderlined}>CMC:</Text> { card.cmc }</Text>
        <Text style={styles.listItem} ><Text style={styles.boldAndUnderlined}>Type:</Text> { card.type }</Text>
        <Text style={styles.listItem} ><Text style={styles.boldAndUnderlined}>Rarity:</Text> { card.rarity }</Text>
        <Text style={styles.listItem} ><Text style={styles.boldAndUnderlined}>No.:</Text> { card.number }</Text>
        <Text style={styles.listItem} ><Text style={styles.boldAndUnderlined}>Text:</Text> { card.text }</Text>
        <Image style={{ width: 223, height: 311, marginTop: 10 }} source={{ uri: card.imageUrl }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 25,
    width: 300
  },
  list: {
    width: 300
  },
  listItem: {
    fontSize: 18,
    marginBottom: 5
  }, 
  boldAndUnderlined: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }, 
  bold: {
    fontWeight: 'bold'
  }
});