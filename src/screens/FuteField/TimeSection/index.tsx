import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import stylesheets from './styles'
import Icon from '/components/common/Icon'

const TimeSection = () => {
  const [styles, stylesConstants] = useStylesContext(stylesheets)
  const [paused, setPaused] = useState(true)
  const isCaptain = true

  const handlePause = () => {
    setPaused(true)
  }
  const handlePlay = () => {
    setPaused(false)
  }

  const handleResetPress = () => ({})

  const renderReset = () => (
    <TouchableOpacity
      onPress={handleResetPress}
      activeOpacity={0.7}
      style={styles.playContainer}>
      <Icon name="replay" size={30} color={stylesConstants.playColor} />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.fakeSpace} />
      <View style={styles.timeCenter}>
        <View style={styles.fakeSpace} />
        <Text style={styles.time}>05:22</Text>
        {isCaptain ? (
          <TouchableOpacity
            onPress={paused ? handlePlay : handlePause}
            activeOpacity={0.7}
            style={styles.playContainer}>
            <Icon
              name={paused ? 'play' : 'pause'}
              size={22}
              color={stylesConstants.playColor}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.fakeSpace} />
        )}
      </View>
      {true ? renderReset() : <View style={styles.fakeSpace} />}
    </View>
  )
}

export default TimeSection
