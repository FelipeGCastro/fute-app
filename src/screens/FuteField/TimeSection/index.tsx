import { Text, TouchableOpacity, View } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import stylesheets from './styles'
import Icon from '/components/common/Icon'
import { useTimer } from '/hooks/timer'
import { useFieldContext } from '/contexts/field'

interface Props {
  field: IFieldsType
}

const TimeSection = ({ field }: Props) => {
  const [styles, stylesConstants] = useStylesContext(stylesheets)
  const { time, pause, play, reset, loading, paused } = useTimer(field)
  const { isCaptain } = useFieldContext()

  function formatTime(timeToFormat: number) {
    // Remainder of division by 60
    const seconds = timeToFormat % 60
    // Divide by 60 and floor the result (get the nearest lower integer)
    const minutes = Math.floor(timeToFormat / 60)

    // Put it all in one string
    return (
      ('' + minutes).padStart(2, '0') + ':' + ('' + seconds).padStart(2, '0')
    )
  }

  const renderReset = () => (
    <TouchableOpacity
      onPress={reset}
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
        <Text style={styles.time}>{formatTime(time)}</Text>
        {isCaptain ? (
          <TouchableOpacity
            onPress={paused ? play : pause}
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
      {time !== 0 && isCaptain ? (
        renderReset()
      ) : (
        <View style={styles.fakeSpace} />
      )}
    </View>
  )
}

export default TimeSection
