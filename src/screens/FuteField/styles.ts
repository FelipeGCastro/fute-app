import Text from '/styles/text'
import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        flexGrow: 1,
        backgroundColor: variables.background,
        padding: variables.margin_200,
        alignItems: 'center',
      },
      title: {
        ...Text.heading,
        color: variables.yellowish,
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      teamsNow: {
        ...Text.heading,
        color: variables.yellowish,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: variables.margin_400,
      },
      wrapperInput: {
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: variables.margin_500,
      },
      label: {
        ...Text.regular,
        color: variables.yellowish,
        marginTop: variables.margin_200,
      },
      plusButton: {
        width: 64,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: variables.green,
        marginLeft: variables.margin_100,
      },
      constants: {
        plusColor: variables.white,
      },
    },
  })

export default styles
