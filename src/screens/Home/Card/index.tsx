import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import stylesheets from './styles'

interface Props {
  type: IFieldsType
  onPress: (value: IFieldsType) => void
}

const Card = ({ type, onPress }: Props) => {
  const [styles] = useStylesContext(stylesheets)

  const fieldQty = {
    A: 5,
    B: 5,
    C: 8,
    D: 7,
    E: 11,
  }

  function handleOnPress() {
    onPress(type)
  }

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      activeOpacity={0.8}
      style={styles.container}>
      <Text style={styles.title}>CAMPO - {type}</Text>
      <Text style={styles.description}>Futebol {fieldQty[type]}</Text>
    </TouchableOpacity>
  )
}

export default Card
