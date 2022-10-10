import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        backgroundColor: variables.negative,
        paddingVertical: variables.margin_200 / 2,
        paddingHorizontal: variables.margin_200,
      },
      buttonText: {
        color: variables.white,
        fontSize: 16,
        textTransform: 'uppercase',
      },
      constants: {},
    },
  })

export default styles
