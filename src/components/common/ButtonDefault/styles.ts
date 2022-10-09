import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        backgroundColor: '#404040',
        paddingVertical: variables.margin_200 / 2,
        paddingHorizontal: variables.margin_200,
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
