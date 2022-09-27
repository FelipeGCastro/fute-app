import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Curtain from '/screens/Curtain'
import Home from '/screens/Home'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Curtain"
        component={Curtain}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
