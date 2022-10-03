import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Curtain from '/screens/Curtain'
import FuteField from '/screens/FuteField'
import Home from '/screens/Home'
import Map from '/screens/Map'

type RootStackParamList = {
  Curtain: any
  Home: any
  Map: any
  FuteField: { field: IFieldsType }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

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
      <Stack.Screen
        options={{ headerShown: false }}
        name="Map"
        component={Map}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="FuteField"
        component={FuteField}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
