import { MapTypes } from 'utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        margin: 0,
        justifyContent: 'flex-start',
      },
      content: {
        width: variables.contentWidth - variables.margin_200 * 2,
        marginHorizontal: variables.margin_200,
        marginTop: variables.topSafeArea,
      },

      constants: {
        backdropOpacity: 0.6,
        modalTiming: variables.modalTiming,
      },
    },
  })

export default styles
