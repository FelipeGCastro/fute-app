import { View } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import stylesheets from './styles'

const FieldMap = () => {
  const [styles] = useStylesContext(stylesheets)

  const renderField = (
    type: 'fieldE' | 'fieldD' | 'fieldC' | 'fieldB' | 'fieldA',
    direction: 'horizontal' | 'vertical',
  ) => {
    return (
      <View
        style={[
          styles.field,
          styles[type],
          direction === 'horizontal' && styles.horizontal,
        ]}>
        <View style={styles.greatAreaUp}>
          <View style={styles.smallAreaUp} />
        </View>
        <View style={styles.center}>
          <View style={styles.centerLine} />
        </View>
        <View style={styles.centerCircle} />
        <View style={styles.greatAreaDown}>
          <View style={styles.smallAreaDown} />
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.fieldContainerE}>
          {renderField('fieldE', 'vertical')}
        </View>
        <View style={styles.fieldContainerD}>
          {renderField('fieldD', 'horizontal')}
        </View>
        <View style={styles.fieldsDown}>
          <View style={styles.fieldContainerC}>
            {renderField('fieldC', 'vertical')}
          </View>
          <View style={styles.fieldsAB}>
            <View style={styles.fieldContainerB}>
              {renderField('fieldB', 'vertical')}
            </View>
            <View style={styles.fieldContainerA}>
              {renderField('fieldA', 'vertical')}
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default FieldMap
