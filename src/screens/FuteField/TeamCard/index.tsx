import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import stylesheets from './styles'
import Icon from '/components/common/Icon'
import { ITeam, useFieldContext } from '/contexts/field'
interface Props {
  team: ITeam
  onPressCaptain: (deviceId: string) => void
  onPressRemoveTeam: (deviceId: string) => void
  voted: string | undefined
}
const TeamCard = ({
  team,
  onPressCaptain,
  onPressRemoveTeam,
  voted,
}: Props) => {
  const [styles, stylesConstants] = useStylesContext(stylesheets)
  const { myDeviceId } = useFieldContext()

  const handleRemoveTeam = () => {
    Alert.alert('Remover Equipa', 'Tem certeza que deseja remover a equipa?', [
      { onPress: () => ({}), text: 'Cancelar' },
      { onPress: () => onPressRemoveTeam(team.deviceId), text: 'Remover' },
    ])
  }
  const buttonCaptainStyle = [
    styles.captainButtonContainer,
    team.deviceId === voted && styles.userVoted,
  ]
  const teamTextStyle = [
    styles.teamText,
    team.deviceId === myDeviceId && styles.myTeam,
  ]
  return (
    <View style={styles.container}>
      <View style={styles.teamInfo}>
        <View style={styles.teamName}>
          <Text style={teamTextStyle}>
            {team.position}- {team.name}
          </Text>
          <View style={styles.teamCapContainer}>
            <Text style={styles.teamCapLetter}>C</Text>
          </View>
        </View>
        <View style={styles.medalsContainer}>
          {team.votes
            ? Array(team.votes)
                .fill('')
                .map((i, idx) => (
                  <Icon
                    key={idx}
                    style={styles.iconMedal}
                    name="medal"
                    size={16}
                    color={stylesConstants.medalColor}
                  />
                ))
            : null}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => onPressCaptain(team.deviceId)}
          style={buttonCaptainStyle}>
          <Text style={styles.captainButtonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleRemoveTeam}
          style={styles.buttonRemove}>
          <Icon size={25} name="close" color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TeamCard
