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
import { ITeam, useFieldContext } from '/contexts/field'

type RootStackParamList = {
  FuteField: { field: IFieldsType }
}
type Props = StackScreenProps<RootStackParamList, 'FuteField'>

const FuteField = ({ route }: Props) => {
  const field = route.params?.field
  const [styles, stylesConstants] = useStylesContext(stylesheets)
  const t = usePolyglot('futeField')
  const [inputVisible, setInputVisible] = useState(false)
  const { isCaptain, myDeviceId } = useFieldContext()
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

  const handleSetToLast = (team: ITeam) => {
    if (team.deviceId) {
      addNextTeam('', team.deviceId)
    }
  }

  const team1 = teams[0] ? teams[0].name : 'Aguardando...'
  const team2 = teams[1] ? teams[1].name : 'Aguardando...'
  const existAndisCaptainOrMe =
    teams[0] && (isCaptain || teams[0].deviceId === myDeviceId)
  const existAndisCaptainOrMeTwo =
    teams[1] && (isCaptain || teams[1].deviceId === myDeviceId)
  const renderHeader = () => (
    <>
      <Header hasBack title={`Campo ${field.split('field')[1]}`} />
      <View style={styles.teamsPlayingContainer}>
        <View style={styles.teamNameContainer}>
          {existAndisCaptainOrMe && (
            <TouchableOpacity
              onPress={() => handleSetToLast(teams[0])}
              style={[styles.buttonRemove, styles.buttonRight]}>
              <Icon size={25} name="long-arrow-down" color="#FFF" />
            </TouchableOpacity>
          )}
          {existAndisCaptainOrMeTwo && !existAndisCaptainOrMe && (
            <View style={styles.fakeSpace} />
          )}
          <Text style={[styles.teamsNow, styles.teamsNowLeft]}>{team1}</Text>
        </View>
        <Icon style={styles.icon} name="close" color="#FFF" size={25} />
        <View style={styles.teamNameContainer}>
          {existAndisCaptainOrMeTwo && (
            <TouchableOpacity
              onPress={() => handleSetToLast(teams[1])}
              style={styles.buttonRemove}>
              <Icon size={25} name="long-arrow-down" color="#FFF" />
            </TouchableOpacity>
          )}
          {existAndisCaptainOrMe && !existAndisCaptainOrMeTwo && (
            <View style={styles.fakeSpace} />
          )}
          <Text style={styles.teamsNow}>{team2}</Text>
        </View>
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
              {teams.map((team, index) => (
                <TeamCard
                  index={index}
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
