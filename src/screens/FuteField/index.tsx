import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useStylesContext } from 'hooks/styles'
import usePolyglot from 'hooks/polyglot'
import stylesheets from './styles'
// import { StackScreenProps } from '@react-navigation/stack'
import { NativeStackScreenProps as StackScreenProps } from '@react-navigation/native-stack'
import TimeSection from './TimeSection'
import InputFieldText from '/components/common/InputFieldText'
import Icon from '/components/common/Icon'
import { isAndroid } from '/utils/deviceInfo'

type RootStackParamList = {
  FuteField: { field: IFieldsType }
}
type Props = StackScreenProps<RootStackParamList, 'FuteField'>

const FuteField = ({ navigation, route }: Props) => {
  const field = route.params?.field
  const [styles, stylesConstants] = useStylesContext(stylesheets)
  const t = usePolyglot('futeField')

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={isAndroid ? 'height' : 'padding'}
        style={styles.keyboardAvoidingView}
        keyboardVerticalOffset={stylesConstants.keyboardOffset}>
        <Text style={styles.title}>Campo {field}</Text>
        <Text style={styles.label}>Acontecendo</Text>
        <Text style={styles.teamsNow}>LUIZ TEAM x LEA TEAM</Text>
        <TimeSection />
        <View style={styles.wrapperInput}>
          <InputFieldText
            label="Nome da Equipe ou Responsável"
            onChangeText={(value: string) => console.log('value:', value)}
          />
          <TouchableOpacity style={styles.plusButton}>
            <Icon name="plus" size={22} color={stylesConstants.plusColor} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default FuteField
