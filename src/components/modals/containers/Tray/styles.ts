import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        margin: 0,
        justifyContent: 'flex-end',
      },
      backdropContainer: {
        flexGrow: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: variables.contentWidth,
      },
      backdrop: {
        width: variables.screenWidth,
        height: variables.screenHeight,
        backgroundColor: variables.glass,
      },
      constants: {
        backdropColor: variables.osloGray,
        modalTiming: variables.modalTiming,
        blurAmount: 3,
      },
    },
  })

export default styles
