import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        flexGrow: 1,
        backgroundColor: variables.background,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: variables.bottomSafeArea + variables.margin_200,
        paddingTop: variables.topSafeArea,
      },
      logo: {
        width: 200,
      },
      textInfo: {
        alignItems: 'center',
        marginTop: variables.margin_200,
        marginBottom: '20%',
      },
      textTitle: {
        fontSize: 46,
        fontWeight: 'bold',
        color: variables.greenLight,
      },
      textSecondTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: variables.yellowish,
      },
      poweredBy: {
        fontSize: 12,
        marginTop: variables.margin_50,
        color: variables.white,
      },
      buttonContainer: {
        backgroundColor: 'rgba(216,233,168, 0.2)',
        alignSelf: 'stretch',
        marginHorizontal: variables.margin_200,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: variables.margin_200,
      },
      buttonText: {
        fontSize: 16,
        color: variables.yellowish,
        fontWeight: 'bold',
      },
      constants: {},
    },
  })

export default styles
