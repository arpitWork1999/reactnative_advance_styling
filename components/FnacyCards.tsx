import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FnacyCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Trending Places</Text>
      <View style = {[styles.card, styles.cardElevated]}>
        <Image source={{uri: 'https://cdn.britannica.com/25/242225-050-72142DF7/Front-facade-of-Palace-of-the-Winds-Hawa-Mahal-Jaipur-Rajasthan-India.jpg'}} 
        style = {styles.cardImage}></Image>
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>Hawa Mahal</Text>
            <Text style = {styles.cardLabel}>Pink City</Text>
            <Text style = {styles.cardDescription}>Hawa Mahal, palace in the Indian city of Jaipur that was designed by Lal Chand Ustad for Maharaja Sawai Pratap Singh, the grandson of the founder of Jaipur, and was completed in 1799.</Text>
            <Text style = {styles.cardFooter}>12 mins away</Text>
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
    card: {
        borderRadius: 8,
        marginHorizontal: 10,
        marginVertical: 10
    },
    cardElevated: {
        backgroundColor: '#000000',
        elevation: 3,
        shadowOffset: {
            width: 5,
            height:5
        }
    },
    cardImage: {
        height: 250,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    cardBody: {
        margin: 10
    },
    cardTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 3
        },
    cardLabel: {
        color: '#ffffff',
        fontSize: 16,
        marginBottom: 6
    },
    cardDescription: {
        color: '#ffffff',
        fontSize: 14,
        marginBottom: 5
    },
    cardFooter: {
        color: '#b2adad'
    }
})