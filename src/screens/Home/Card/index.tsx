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
    fieldA: 5,
    fieldB: 5,
    fieldC: 8,
    fieldD: 7,
    fieldE: 11,
  }

  function handleOnPress() {
    onPress(type)
  }

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      activeOpacity={0.8}
      style={styles.container}>
      <Text style={styles.title}>CAMPO - {type.split('field')[1]}</Text>
      <Text style={styles.description}>Futebol {fieldQty[type]}</Text>
    </TouchableOpacity>
  )
}

export default Card
