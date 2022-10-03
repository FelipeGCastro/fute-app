import Text from '/styles/text'
import { MapTypes } from '/utils/typeTools'
const inputHeight = 64
const inputHeightBig = 148
const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      inputContainer: {
        flexGrow: 1,
        alignItems: 'stretch',
        backgroundColor: variables.yellowish,
        height: inputHeight,
        justifyContent: 'center',
        paddingHorizontal: variables.margin_200,
        paddingVertical: variables.margin_200,
      },
      labelInput: {
        ...Text.regular,
        color: variables.typographyPrimaryColor,
        marginBottom: 4,
      },
      labelInputSmall: {
        fontSize: 14,
      },
      big: {
        height: inputHeightBig,
        justifyContent: 'flex-start',
      },
      bigInput: {
        ...Text.regular,
      },
      errorText: {
        fontSize: 14,
        color: 'red',
      },
      input: {
        ...Text.regular,
        color: variables.typographyPrimaryColor,
        paddingVertical: 0,
      },
      constants: {},
    },
  })

export default styles
