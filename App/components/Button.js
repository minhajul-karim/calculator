import React from 'react'
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native'

const screen = Dimensions.get('window')
const buttonWidth = Math.floor(screen.width / 4)

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: '#333',
    height: buttonWidth - 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: buttonWidth,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  },
  doubleWidthButton: {
    flex: 0,
    width: Math.floor(screen.width / 2) - 10,
    alignItems: 'flex-start',
    padding: 35,
  },
  secondaryButton: {
    backgroundColor: '#a6a6a6',
  },
  accentButton: {
    backgroundColor: '#f09136',
  },
  secondaryButtonText: {
    color: '#060606',
  },
})

export default ({ onPress, text, size, theme }) => {
  const buttonContainerStyle = [styles.buttonContainer]
  const buttonTextStyle = [styles.buttonText]
  if (size === 'double') {
    buttonContainerStyle.push(styles.doubleWidthButton)
  } else if (theme === 'secondary') {
    buttonContainerStyle.push(styles.secondaryButton)
    buttonTextStyle.push(styles.secondaryButtonText)
  } else if (theme === 'accent') {
    buttonContainerStyle.push(styles.accentButton)
  }

  return (
    <TouchableOpacity style={buttonContainerStyle} onPress={onPress}>
      <Text style={buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  )
}
