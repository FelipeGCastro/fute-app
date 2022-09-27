import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        flexGrow: 1,
        backgroundColor: variables.background,
        alignItems: 'stretch',
        paddingHorizontal: variables.margin_200,
        paddingTop: variables.topSafeArea + variables.margin_200,
      },
      constants: {},
    },
  })

export default styles
