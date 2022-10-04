import { Text, TouchableOpacity, View } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import stylesheets from './styles'
import Icon from '/components/common/Icon'

interface Props {
  onPress: () => void
}

const AddButton = ({ onPress }: Props) => {
  const [styles, stylesConstants] = useStylesContext(stylesheets)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Entrar na Fila -</Text>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={styles.circle}>
        <Icon size={25} name="plus" color={stylesConstants.iconPlusColor} />
      </TouchableOpacity>
    </View>
  )
}

export default AddButton
