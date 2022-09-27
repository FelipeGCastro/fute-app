/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native'
import { PolyglotProvider } from './contexts/polyglot'
import { StylesProvider } from './contexts/styles'
import AuthNavigator from './navigation/AuthNavigator'
import MainNavigator from './navigation/MainNavigator'

const App = () => {
  const isLogged = true
  return (
    <StylesProvider>
      <PolyglotProvider>
        <NavigationContainer>
          {isLogged ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </PolyglotProvider>
    </StylesProvider>
  )
}

export default App
