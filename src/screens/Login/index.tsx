import React, { PropsWithChildren } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import { useStylesContext } from 'hooks/styles'
import usePolyglot from 'hooks/polyglot'
import stylesheets from './styles'
// import { StackScreenProps } from '@react-navigation/stack'
import { NativeStackScreenProps as StackScreenProps } from '@react-navigation/native-stack'

type RootStackParamList = {
  Login: any
}
type Props = StackScreenProps<RootStackParamList, 'Login'>

const Login = ({ navigation }: Props) => {
  const [styles] = useStylesContext(stylesheets)
  const t = usePolyglot('login')
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'#faf'}
      />

      <Text style={styles.mainText}>Hello World</Text>
    </SafeAreaView>
  )
}

export default Login
