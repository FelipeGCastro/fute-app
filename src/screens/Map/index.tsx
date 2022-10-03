import React from 'react'
import { View } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import usePolyglot from 'hooks/polyglot'
import stylesheets from './styles'
// import { StackScreenProps } from '@react-navigation/stack'
import { NativeStackScreenProps as StackScreenProps } from '@react-navigation/native-stack'
import FieldMap from '/components/common/FieldMap'

type RootStackParamList = {
  Map: any
  FuteField: { field: IFieldsType }
}
type Props = StackScreenProps<RootStackParamList, 'Map'>

const Map = ({ navigation }: Props) => {
  const [styles] = useStylesContext(stylesheets)
  const handleFieldPress = (type: IFieldsType) => {
    navigation.navigate('FuteField', { field: type })
  }

  return (
    <View style={styles.container}>
      <View style={styles.mapWrapper}>
        <FieldMap onPressField={handleFieldPress} withLetter="big" />
      </View>
    </View>
  )
}

export default Map
