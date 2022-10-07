import { Text, TouchableOpacity, View } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import stylesheets from './styles'

interface Props {
  withLetter?: 'small' | 'regular' | 'medium' | 'big'
  onPressField?: (type: IFieldsType) => void
}

const FieldMap = ({ withLetter, onPressField }: Props) => {
  const [styles] = useStylesContext(stylesheets)

  const handleFieldPress = (type: IFieldsType) => {
    if (onPressField) {
      onPressField(type)
    }
  }

  const renderField = (
    type: IFieldsType,
    direction: 'horizontal' | 'vertical' = 'vertical',
  ) => {
    const isHorizontal = direction === 'horizontal'
    return (
      <TouchableOpacity
        onPress={() => handleFieldPress(type)}
        activeOpacity={0.7}
        style={[styles.field, styles[type], isHorizontal && styles.horizontal]}>
        <View style={styles.greatAreaUp}>
          <View style={styles.smallAreaUp} />
        </View>
        <View style={styles.center}>
          <View style={styles.centerLine} />
        </View>
        <View style={styles.centerCircle} />
        {!!withLetter && (
          <View style={styles.typeTextContainer}>
            <Text
              style={[
                styles.typeText,
                styles[withLetter],
                isHorizontal && styles.horizontalText,
              ]}>
              {type}
            </Text>
          </View>
        )}
        <View style={styles.greatAreaDown}>
          <View style={styles.smallAreaDown} />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.fieldContainerE}>
          {renderField('fieldE', undefined)}
        </View>
        <View style={styles.fieldContainerD}>
          {renderField('fieldD', 'horizontal')}
        </View>
        <View style={styles.fieldsDown}>
          <View style={styles.fieldContainerC}>
            {renderField('fieldC', undefined)}
          </View>
          <View style={styles.fieldsAB}>
            <View style={styles.fieldContainerB}>
              {renderField('fieldB', undefined)}
            </View>
            <View style={styles.fieldContainerA}>
              {renderField('fieldA', undefined)}
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default FieldMap
