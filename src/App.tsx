/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { PolyglotProvider } from './contexts/polyglot'
import { StylesProvider } from './contexts/styles'
import AuthNavigator from './navigation/AuthNavigator'
import MainNavigator from './navigation/MainNavigator'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#191A19',
    background: '#191A19',
  },
}

const App = () => {
  const isLogged = true
  return (
    <StylesProvider>
      <PolyglotProvider>
        <NavigationContainer theme={MyTheme}>
          {isLogged ? <MainNavigator /> : <AuthNavigator />}
          <StatusBar backgroundColor="#191A19" barStyle="light-content" />
        </NavigationContainer>
      </PolyglotProvider>
    </StylesProvider>
  )
}

export default App
