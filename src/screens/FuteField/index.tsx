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
import { NativeStackScreenProps as StackScreenProps } from '@react-navigation/native-stack'
import TimeSection from './TimeSection'
import InputFieldText from '/components/common/InputFieldText'
import Icon from '/components/common/Icon'
import { isAndroid } from '/utils/deviceInfo'
import TeamCard from './TeamCard'
import AddButton from './AddButton'
import Reanimated, { FadeIn, FadeOut } from 'react-native-reanimated'
import Header from '/components/navigation/Header'
import { useField } from '/hooks/field'

type RootStackParamList = {
  FuteField: { field: IFieldsType }
}
type Props = StackScreenProps<RootStackParamList, 'FuteField'>

const FuteField = ({ route }: Props) => {
  const field = route.params?.field
  const [styles, stylesConstants] = useStylesContext(stylesheets)
  const t = usePolyglot('futeField')
  const [inputVisible, setInputVisible] = useState(false)
  const {
    teams,
    addNextTeam,
    loading,
    voted,
    voteCaptain,
    hasTeam,
    removeTeam,
  } = useField(field)
  const [teamName, setTeamName] = useState('')

  const handleAddTeam = () => {
    if (teamName.length > 3) {
      addNextTeam(teamName)
    }
  }

  const handleAddInput = () => {
    setInputVisible(true)
  }

  const handleHideInput = () => {
    setInputVisible(false)
  }
  const handlePressCaptain = (deviceId: string) => {
    voteCaptain(deviceId)
  }
  const handlePressRemoveTeam = (deviceId: string) => {
    removeTeam(deviceId)
  }

  const team1 = teams[0] ? teams[0].name : 'Aguardando...'
  const team2 = teams[1] ? teams[1].name : 'Aguardando...'
  const renderHeader = () => (
    <>
      <Header hasBack title={`Campo ${field.split('field')[1]}`} />
      <Text style={styles.label}>Acontecendo</Text>
      <View style={styles.teamsPlayingContainer}>
        <Text style={[styles.teamsNow, styles.teamsNowLeft]}>{team1}</Text>
        <Icon style={styles.icon} name="close" color="#FFF" size={25} />
        <Text style={styles.teamsNow}>{team2}</Text>
      </View>
      <TimeSection field={field} />
      {inputVisible && !hasTeam && (
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
              {teams.map(team => (
                <TeamCard
                  key={team.id}
                  voted={voted}
                  onPressCaptain={handlePressCaptain}
                  onPressRemoveTeam={handlePressRemoveTeam}
                  team={team}
                />
              ))}
            </View>
          </Reanimated.View>
        </TouchableWithoutFeedback>
        {!inputVisible && !hasTeam ? (
          <AddButton onPress={handleAddInput} />
        ) : null}
      </KeyboardAvoidingView>
    </View>
  )
}

export default FuteField
