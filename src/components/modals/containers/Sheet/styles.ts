import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        margin: 0,
        backgroundColor: variables.white,
      },

      constants: {
        animationType: 'slide',
        modalTiming: variables.modalTiming,
      },
    },
  })

export default styles
