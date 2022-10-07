import { Text, TouchableOpacity, View } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import usePolyglot from 'hooks/polyglot'
import stylesheets from './styles'
// import { StackScreenProps } from '@react-navigation/stack'
import { NativeStackScreenProps as StackScreenProps } from '@react-navigation/native-stack'
import Card from './Card'
import FieldMap from '/components/common/FieldMap'

type RootStackParamList = {
  Home: any
  Map: any
  FuteField: { field: IFieldsType }
}
type Props = StackScreenProps<RootStackParamList, 'Home'>

const Home = ({ navigation }: Props) => {
  const [styles] = useStylesContext(stylesheets)
  const t = usePolyglot()

  const handleOnPress = (type: IFieldsType) => {
    navigation.navigate('FuteField', { field: type })
  }
  const handleMap = () => {
    navigation.navigate('Map')
  }

  return (
    <View style={styles.container}>
      <Card type="fieldA" onPress={handleOnPress} />
      <Card type="fieldB" onPress={handleOnPress} />
      <Card type="fieldC" onPress={handleOnPress} />
      <Card type="fieldD" onPress={handleOnPress} />
      <Card type="fieldE" onPress={handleOnPress} />
      <TouchableOpacity
        onPress={handleMap}
        activeOpacity={0.8}
        style={styles.mapButton}>
        <View style={styles.mapWrapper}>
          <FieldMap />
        </View>
        <Text style={styles.buttonText}>MAPA</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
