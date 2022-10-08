import Text from '/styles/text'
import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: variables.margin_100,
        paddingTop: variables.topSafeArea,
      },
      isCaptain: {
        backgroundColor: variables.green,
      },
      backContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
      },
      fakeSpace: {
        width: 40,
      },
      title: {
        ...Text.heading,
        fontWeight: 'bold',
        color: variables.yellowish,
        textTransform: 'uppercase',
      },
      capContainer: {
        width: 40,
        flexDirection: 'row',
        alignItems: 'center',
      },
      capLetter: {
        fontSize: 26,
        color: variables.white,
        fontWeight: 'bold',
        marginRight: variables.margin_50,
      },
      capTrapsContainer: {
        flexGrow: 1,
      },
      capTrap: {
        height: 3,
        backgroundColor: variables.white,
        marginVertical: variables.margin_25,
      },
      constants: {
        backIconColor: variables.yellowish,
      },
    },
  })

export default styles
