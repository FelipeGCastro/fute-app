import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import stylesheets from './styles'

const Card = () => {
  const [styles] = useStylesContext(stylesheets)

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Text style={styles.title}>CAMPO - A</Text>
      <Text style={styles.description}>Futebol 5</Text>
    </TouchableOpacity>
  )
}

export default Card
