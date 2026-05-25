import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'


export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style = {[styles.card, styles.cardElevated]}>
        <Text style = {styles.textDecoration}>Tap</Text>
      </View>
      <View style = {[styles.card, styles.cardElevated]}>
        <Text style = {styles.textDecoration}>me</Text>
      </View>
      <View style = {[styles.card, styles.cardElevated]}>
        <Text style = {styles.textDecoration}>for</Text>
      </View>
      <View style = {[styles.card, styles.cardElevated]}>
        <Text style = {styles.textDecoration}>Scroll</Text>
      </View>
      <View style = {[styles.card, styles.cardElevated]}>
        <Text style = {styles.textDecoration}>more...</Text>
      </View>
      <View style = {[styles.card, styles.cardElevated]}>
        <Text >😊</Text>
      </View>
      </ScrollView>
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
    padding: 5
  },
  card: {
    width: 100,
    height:100,
    backgroundColor: '#726b6b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 8
  },
  cardElevated:{

  }
})