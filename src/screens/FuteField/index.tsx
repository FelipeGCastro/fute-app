import { useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
import TeamCard from './TeamCard'
import AddButton from './AddButton'
import Reanimated, { FadeIn, FadeOut } from 'react-native-reanimated'

type RootStackParamList = {
  FuteField: { field: IFieldsType }
}
type Props = StackScreenProps<RootStackParamList, 'FuteField'>

const FuteField = ({ route }: Props) => {
  const field = route.params?.field
  const [styles, stylesConstants] = useStylesContext(stylesheets)
  const t = usePolyglot('futeField')
  const [inputVisible, setInputVisible] = useState(false)
  const [teamName, setTeamName] = useState('')

  const handleAddTeam = () => ({})

  const handleAddInput = () => {
    setInputVisible(true)
  }

  const handleHideInput = () => {
    setInputVisible(false)
  }

  const renderHeader = () => (
    <>
      <Text style={styles.title}>Campo {field}</Text>
      <Text style={styles.label}>Acontecendo</Text>
      <Text style={styles.teamsNow}>LUIZ TEAM x LEA TEAM</Text>
      <TimeSection />
      {inputVisible && (
        <Reanimated.View
          entering={FadeIn}
          exiting={FadeOut}
          style={styles.wrapperInput}>
          <InputFieldText
            defaultFocused
            label="Nome da Equipe ou Responsável"
            keyboardAppearance="dark"
            onChangeText={(value: string) => setTeamName(value)}
          />
          <TouchableOpacity
            onPress={!teamName ? handleHideInput : handleAddTeam}
            style={[styles.plusButton, !teamName && styles.redBackground]}>
            <Icon
              style={!!teamName && styles.iconPlus}
              name="close"
              size={22}
              color={stylesConstants.plusColor}
            />
          </TouchableOpacity>
        </Reanimated.View>
      )}
    </>
  )

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={isAndroid ? 'height' : 'padding'}
        style={styles.keyboardAvoidingView}
        keyboardVerticalOffset={stylesConstants.keyboardOffset}>
        <TouchableWithoutFeedback
          style={styles.keyboardAvoidingView}
          onPress={Keyboard.dismiss}>
          <Reanimated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.content}>
            {renderHeader()}
            <View style={styles.listTeam}>
              <TeamCard />
              <TeamCard />
              <TeamCard />
              <TeamCard />
            </View>
          </Reanimated.View>
        </TouchableWithoutFeedback>
        {!inputVisible && <AddButton onPress={handleAddInput} />}
      </KeyboardAvoidingView>
    </View>
  )
}

export default FuteField
