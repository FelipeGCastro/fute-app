import Text from '/styles/text'
import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        flexDirection: 'row',
        borderBottomColor: variables.yellowishOpacity,
        paddingVertical: variables.margin_200,
        paddingHorizontal: variables.margin_200,
        borderBottomWidth: 1,
        justifyContent: 'space-between',
      },
      teamInfo: {
        flexGrow: 1,
        justifyContent: 'space-between',
      },
      teamName: {
        flexDirection: 'row',
      },
      teamText: {
        fontSize: 16,
        color: variables.yellowish,
      },
      teamCapContainer: {
        backgroundColor: variables.green,
        width: 27,
        height: 21,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: variables.margin_200,
      },
      teamCapLetter: {
        ...Text.regularBold,
        color: variables.white,
      },
      medalsContainer: {
        flexDirection: 'row',
        marginTop: variables.margin_100,
      },
      iconMedal: {
        marginHorizontal: variables.margin_50,
      },
      buttonContainer: {
        flexDirection: 'row',
      },
      captainButtonContainer: {
        width: 40,
        height: 40,
        backgroundColor: variables.green,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: variables.margin_200,
      },
      captainButtonText: {
        ...Text.heading,
        fontWeight: 'bold',
        color: variables.white,
      },
      buttonRemove: {
        width: 40,
        height: 40,
        backgroundColor: variables.negative,
        alignItems: 'center',
        justifyContent: 'center',
      },
      constants: {
        medalColor: variables.greenLight,
      },
    },
  })

export default styles
