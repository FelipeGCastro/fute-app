import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import stylesheets from './styles'
import Icon from '/components/common/Icon'
import { useNavigation } from '@react-navigation/native'
interface Props {
  title: string
  hasBack?: boolean
  onBackPress?: () => void
  isCap?: boolean
}
const Header = ({ title, onBackPress, hasBack, isCap }: Props) => {
  const [styles, stylesConstants] = useStylesContext(stylesheets)
  const navigation = useNavigation()

  const handleBack = () => {
    onBackPress && onBackPress()
    navigation.goBack()
  }

  const renderBack = () => (
    <TouchableOpacity onPress={handleBack} style={styles.backContainer}>
      <Icon name="arrow-back" size={26} color={stylesConstants.backIconColor} />
    </TouchableOpacity>
  )

  const renderCap = () => (
    <View style={styles.capContainer}>
      <Text style={styles.capLetter}>C</Text>
      <View style={styles.capTrapsContainer}>
        <View style={styles.capTrap} />
        <View style={styles.capTrap} />
        <View style={styles.capTrap} />
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      {hasBack ? renderBack() : <View style={styles.fakeSpace} />}

      <Text style={styles.title}>{title}</Text>
      {isCap ? renderCap() : <View style={styles.fakeSpace} />}
    </View>
  )
}

export default Header
