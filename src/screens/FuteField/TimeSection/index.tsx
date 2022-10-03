import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import stylesheets from './styles'
import Icon from '/components/common/Icon'

const TimeSection = () => {
  const [styles, stylesConstants] = useStylesContext(stylesheets)
  const isCaptain = true

  return (
    <View style={styles.container}>
      <View style={styles.fakeSpace} />
      <View style={styles.timeCenter}>
        <View style={styles.fakeSpace} />
        <Text style={styles.time}>05:22</Text>
        {isCaptain ? (
          <TouchableOpacity activeOpacity={0.7} style={styles.playContainer}>
            <Icon name="play" size={22} color={stylesConstants.playColor} />
          </TouchableOpacity>
        ) : (
          <View style={styles.fakeSpace} />
        )}
      </View>
      <View style={styles.fakeSpace} />
    </View>
  )
}

export default TimeSection
