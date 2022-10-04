import Text from '/styles/text'
import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        flexGrow: 1,
        backgroundColor: variables.background,
        paddingVertical: variables.margin_200,
        alignItems: 'stretch',
      },
      content: {},
      keyboardAvoidingView: {
        flexGrow: 1,
      },
      title: {
        ...Text.heading,
        color: variables.yellowish,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        alignSelf: 'center',
      },
      teamsNow: {
        ...Text.heading,
        color: variables.white,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: variables.margin_400,
        alignSelf: 'center',
      },
      wrapperInput: {
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: variables.margin_500,
        paddingHorizontal: variables.margin_200,
      },
      label: {
        ...Text.regular,
        color: variables.yellowish,
        marginTop: variables.margin_200,
        alignSelf: 'center',
      },
      plusButton: {
        width: 64,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: variables.green,
        marginLeft: variables.margin_100,
      },
      listTeam: {
        marginTop: variables.margin_400,
      },
      redBackground: {
        backgroundColor: variables.negative,
      },
      iconPlus: {
        transform: [{ rotate: '45deg' }],
      },
      constants: {
        plusColor: variables.white,
        keyboardOffset: variables.margin_200,
      },
    },
  })

export default styles
