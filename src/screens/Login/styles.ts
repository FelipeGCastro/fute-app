import Text from '/styles/text'
import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        flexGrow: 1,
        backgroundColor: variables.mainColor,
        alignItems: 'center',
        justifyContent: 'center',
      },
      mainText: {
        fontSize: 24,
        color: variables.categoryColorFinance,
      },
      constants: {},
    },
  })

export default styles
