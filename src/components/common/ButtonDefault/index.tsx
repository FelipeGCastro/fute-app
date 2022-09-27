import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import stylesheets from './styles'

interface Props {
  text: string
  onPress: () => void
}

const ButtonDefault = ({ text, onPress }: Props) => {
  const [styles] = useStylesContext(stylesheets)

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonDefault
