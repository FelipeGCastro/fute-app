import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        flexGrow: 1,
        backgroundColor: variables.background,
        paddingVertical: variables.margin_200,
      },
      mapWrapper: {
        height: variables.contentHeight - variables.margin_200 * 2,
      },
      constants: {},
    },
  })

export default styles
