import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
  },
})

export default ({ children }) => (
  <View style={styles.rowContainer}>{children}</View>
)
