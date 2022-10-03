import Text from '/styles/text'
import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        flexGrow: 1,
        backgroundColor: variables.background,
        alignItems: 'stretch',
        paddingHorizontal: variables.margin_200,
        paddingTop: variables.topSafeArea + variables.margin_200,
      },
      mapButton: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      mapWrapper: {
        width: 100,
        transform: [{ rotate: '90deg' }],
      },
      buttonText: {
        ...Text.heading,
        color: variables.yellowish,
        marginTop: -variables.margin_400,
      },
      constants: {},
    },
  })

export default styles
