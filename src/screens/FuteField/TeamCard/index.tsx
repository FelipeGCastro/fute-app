import { Text, TouchableOpacity, View } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import stylesheets from './styles'
import Icon from '/components/common/Icon'

const TeamCard = () => {
  const [styles, stylesConstants] = useStylesContext(stylesheets)

  return (
    <View style={styles.container}>
      <View style={styles.teamInfo}>
        <View style={styles.teamName}>
          <Text style={styles.teamText}>1 - Luiz Castro</Text>
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
        <TouchableOpacity style={styles.captainButtonContainer}>
          <Text style={styles.captainButtonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRemove}>
          <Icon size={25} name="close" color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TeamCard
