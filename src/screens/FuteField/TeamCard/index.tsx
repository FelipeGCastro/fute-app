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
  index: number
}
const TeamCard = ({
  team,
  onPressCaptain,
  onPressRemoveTeam,
  voted,
  index,
}: Props) => {
  const [styles, stylesConstants] = useStylesContext(stylesheets)
  const { myDeviceId, isCaptain, captain } = useFieldContext()
  const isMe = team.deviceId === myDeviceId

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
  const teamTextStyle = [styles.teamText, isMe && styles.myTeam]
  return (
    <View style={styles.container}>
      <View style={styles.teamInfo}>
        <View style={styles.teamName}>
          <Text style={teamTextStyle}>
            {index + 1}- {team.name}
          </Text>
          {captain === team.deviceId && (
            <View style={styles.teamCapContainer}>
              <Text style={styles.teamCapLetter}>C</Text>
            </View>
          )}
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
        {(isMe || isCaptain) && (
          <TouchableOpacity
            onPress={handleRemoveTeam}
            style={styles.buttonRemove}>
            <Icon size={25} name="close" color="#FFF" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default TeamCard
