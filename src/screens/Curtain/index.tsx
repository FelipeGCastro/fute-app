import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import usePolyglot from 'hooks/polyglot'
import stylesheets from './styles'
// import { StackScreenProps } from '@react-navigation/stack'
import { NativeStackScreenProps as StackScreenProps } from '@react-navigation/native-stack'
import FieldMap from '/components/common/FieldMap'

type RootStackParamList = {
  Curtain: any
  Home: any
}
type Props = StackScreenProps<RootStackParamList, 'Curtain'>

const Curtain = ({ navigation }: Props) => {
  const [styles] = useStylesContext(stylesheets)
  const t = usePolyglot('Curtain')

  return (
    <View style={styles.container}>
      <View />
      <View>
        <View style={styles.logo}>
          <FieldMap />
        </View>
        <View style={styles.textInfo}>
          <Text style={styles.textTitle}>FUTEBOL</Text>
          <Text style={styles.textSecondTitle}>PARQUE DA RODOVIA</Text>
          <Text style={styles.poweredBy}>
            Powered by Luiz Castro and Allisson
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        activeOpacity={0.7}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>COMEÇAR</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Curtain
