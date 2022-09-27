import React from 'react'
import { Text, View } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import usePolyglot from 'hooks/polyglot'
import stylesheets from './styles'
// import { StackScreenProps } from '@react-navigation/stack'
import { NativeStackScreenProps as StackScreenProps } from '@react-navigation/native-stack'
import ButtonDefault from '/components/common/ButtonDefault'
import Card from './Card'

type RootStackParamList = {
  Home: any
}
type Props = StackScreenProps<RootStackParamList, 'Home'>

const Home = ({ navigation }: Props) => {
  const [styles] = useStylesContext(stylesheets)
  const t = usePolyglot()

  const handleOnPress = () => ({})

  return (
    <View style={styles.container}>
      <Card />
      <Card />
      <Card />
      <Card />
    </View>
  )
}

export default Home
