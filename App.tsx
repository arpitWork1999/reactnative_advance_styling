import { View, Text, ScrollView, StyleSheet,} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'

const App = () => {
  return (
    <SafeAreaView > 
      <ScrollView >
              <FlatCards />
              <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  )
} 

const styles = StyleSheet.create({

})

export default App