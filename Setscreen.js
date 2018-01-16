import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Alert } from 'react-native';

export default class Setscreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { cards: [] }
  }

  static navigationOptions = {
    title: 'Home'
  };

  render() {
    // let cardsData = cards.map(
    //   (card) => ({key: card })
    // );
    const { navigate } = this.props.navigation;
    const { set } = this.props.navigation.state.params;
    if (this.state.cards.length === 0) {
      fetch(`https://api.magicthegathering.io/v1/cards?set=${set.code}`)
        .then((response) => response.json())
        .then(
        (responseJson) => {
          results = responseJson

          cards = results.cards.map(
            (card) => {
              return {
                name: card.name,
                cmc: card.cmc,
                colors: card.colors,
                type: card.type,
                rarity: card.rarity,
                text: card.text,
                number: card.number,
                imageUrl: card.imageUrl
              };
            }
          )
        }
        ).then(
          () => this.setState({ cards: cards })
        )
    }

    if (this.state.cards === 0) {
      return <Text>Loading...</Text>
    }

    return (
      <View style={styles.container}>
        <Text style={[styles.header, styles.bold]}>Welcome to {set.name}</Text>
        <ScrollView style={styles.list}>
          {this.state.cards.map(
            (card) => <Text 
                        key={card.name + card.number}
                        style={styles.listItem}
                        onPress={() => navigate('Card', { card: card })}  
                      >{`${card.number}: ${card.name}`}</Text>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
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
  bold: {
    fontWeight: 'bold'
  }
});