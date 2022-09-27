import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        backgroundColor: '#404040',
        paddingVertical: variables.marginVertical / 2,
        paddingHorizontal: variables.marginHorizontal,
        borderRadius: variables.borderRegular,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      },
      constants: {},
    },
  })

export default styles
