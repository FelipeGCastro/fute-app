import text from 'styles/text'

import { MapTypes } from 'utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        padding: variables.margin_200,
        borderRadius: variables.border_xs,
        backgroundColor: variables.negativeBlur,
        alignItems: 'stretch',
      },
      titleText: {
        ...text.heading,
        color: variables.white,
        marginBottom: variables.margin_200,
      },
      text: {
        ...text.regular,
        color: variables.white,
        marginBottom: variables.margin_200,
      },
      buttonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: variables.margin_200,
      },
      button: {
        width: '100%',
        justifyContent: 'center',
      },
      buttonSecondary: {
        marginBottom: variables.margin_100,
      },

      constants: {
        blurAmount: 4,
        topMargin: variables.margin_200,
      },
    },
  })

export default styles
