import {MapTypes} from 'utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        margin: 0,
      },
      containerDown: {
        justifyContent: 'flex-end',
      },
      containerUp: {
        justifyContent: 'flex-start',
      },
      content: {
        width: variables.contentWidth - variables.margin_200 * 2,
        marginHorizontal: variables.margin_200,
        marginTop: variables.topSafeArea + variables.topHeaderHeight,
      },

      constants: {
        animationInTiming: 300,
        animationOutTiming: 600,
        backdropOpacity: variables.opacity_0,
        modalTiming: variables.modalTiming,
      },
    },
  })

export default styles
