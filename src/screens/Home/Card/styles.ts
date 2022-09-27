import Text from '/styles/text'
import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        height: 90,
        backgroundColor: variables.green,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: variables.margin_200,
      },
      title: {
        ...Text.headingMedium,
        color: variables.yellowish,
        textTransform: 'uppercase',
        fontWeight: 'bold',
      },
      description: {
        ...Text.heading,
        color: variables.yellowish,
        textTransform: 'uppercase',
      },
      constants: {},
    },
  })

export default styles
