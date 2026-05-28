import { View, Text, ScrollView, StyleSheet,} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FnacyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'

const App = () => {
  return (
    <SafeAreaView > 
      <ScrollView >
              <FlatCards />
              <ElevatedCards />
              <FnacyCards/>
              <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  )
} 

const styles = StyleSheet.create({

})

export default App