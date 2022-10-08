import Text from '/styles/text'
import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: variables.margin_200,
        paddingHorizontal: variables.margin_200,
      },
      fakeSpace: {
        width: 40,
      },
      timeCenter: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      time: {
        fontSize: 24,
        fontWeight: '300',
        color: variables.white,
        fontStyle: 'italic',
        marginHorizontal: variables.margin_200,
      },
      playContainer: {
        width: 40,
        height: 40,
        backgroundColor: variables.green,
        alignItems: 'center',
        justifyContent: 'center',
      },
      constants: {
        playColor: variables.yellowish,
      },
    },
  })

export default styles
