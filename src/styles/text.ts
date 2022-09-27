import { StyleSheet } from 'react-native'
import { commonVariables } from './variables'

const { fontDefault } = commonVariables
const Text = StyleSheet.create({
  heading1: {
    fontFamily: fontDefault,
    fontSize: 30,
    lineHeight: 40.2,
    letterSpacing: 0.3,
  },
  headingBig: {
    fontSize: 46,
  },
  headingMedium: {
    fontSize: 31,
  },
  heading: {
    fontSize: 21,
  },
  regular: {
    fontSize: 16,
  },
  regularBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Text
