import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        position: 'absolute',
        right: variables.margin_200,
        bottom: variables.margin_200,
        flexDirection: 'row',
        alignItems: 'center',
      },
      label: {
        fontSize: 16,
        color: variables.yellowish,
        marginRight: variables.margin_200,
      },
      circle: {
        backgroundColor: variables.green,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
      },
      constants: {
        iconPlusColor: variables.yellowish,
      },
    },
  })

export default styles
