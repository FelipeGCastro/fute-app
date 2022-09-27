import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '/screens/Login'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator
