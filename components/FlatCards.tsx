import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style= {styles.headingText}>FlatCards</Text>
        <View style = {styles.container}>
          <View style = {[styles.card,styles.cardOne]}>
              <Text style = {styles.textDecoration}>Red</Text>

          </View>
          <View style = {[styles.card,styles.cardTwo]}>
              <Text style = {styles.textDecoration}>Green</Text>
          </View>
          <View style = {[styles.card,styles.cardThree]}>
              <Text style = {styles.textDecoration}>Blue</Text>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    flex: 1,
  },
  textDecoration: {
    color: '#ffffff'
  },
  container: {
    padding: 5,
    flex: 1,
    flexDirection: 'row'
  },
  card:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 8,
  },
  cardOne:{
        backgroundColor: '#e92929'
  },
  cardTwo:{
        backgroundColor: '#39e929'
  },
  cardThree:{
        backgroundColor: '#481ede'
  }
})