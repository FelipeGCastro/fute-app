import { Text, TouchableOpacity, View } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import stylesheets from './styles'
import Icon from '/components/common/Icon'
import { ITeam } from '/contexts/field'
interface Props {
  team: ITeam
  onPressCaptain: (deviceId: string) => void
  onPressRemoveTeam: (deviceId: string) => void
}
const TeamCard = ({ team, onPressCaptain, onPressRemoveTeam }: Props) => {
  const [styles, stylesConstants] = useStylesContext(stylesheets)

  return (
    <View style={styles.container}>
      <View style={styles.teamInfo}>
        <View style={styles.teamName}>
          <Text style={styles.teamText}>
            {team.position}- {team.name}
          </Text>
          <View style={styles.teamCapContainer}>
            <Text style={styles.teamCapLetter}>C</Text>
          </View>
        </View>
        <View style={styles.medalsContainer}>
          <Icon
            style={styles.iconMedal}
            name="medal"
            size={16}
            color={stylesConstants.medalColor}
          />
          <Icon
            style={styles.iconMedal}
            name="medal"
            size={16}
            color={stylesConstants.medalColor}
          />
          <Icon
            style={styles.iconMedal}
            name="medal"
            size={16}
            color={stylesConstants.medalColor}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => onPressCaptain(team.deviceId)}
          style={styles.captainButtonContainer}>
          <Text style={styles.captainButtonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressRemoveTeam(team.deviceId)}
          style={styles.buttonRemove}>
          <Icon size={25} name="close" color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TeamCard
