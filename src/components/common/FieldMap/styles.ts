import { MapTypes } from '/utils/typeTools'

const styles = (variables: AllVariablesType) =>
  MapTypes({
    common: {
      container: {
        flexGrow: 1,
        backgroundColor: variables.background,
        paddingTop: variables.topSafeArea,
        paddingHorizontal: variables.margin_200,
      },
      content: {},
      fieldContainerE: {
        width: '50%',
        marginBottom: '-5%',
        marginLeft: '10%',
      },
      fieldE: {
        width: '100%',
      },
      fieldContainerD: {
        width: '90%',
        alignItems: 'flex-end',
      },
      fieldD: {
        width: '45%',
        marginRight: '15%',
      },
      fieldsDown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      fieldContainerC: {
        width: '50%',
        marginLeft: '10%',
      },
      fieldC: {
        width: '85%',
      },
      fieldsAB: {
        flexShrink: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: '-5%',
      },
      fieldContainerB: {
        width: '60%',
        marginBottom: '15%',
        marginRight: '30%',
      },
      fieldB: {
        width: '100%',
      },
      fieldContainerA: {
        width: '60%',
        marginRight: '30%',
      },
      fieldA: {
        width: '100%',
      },
      field: {
        width: '50%',
        // height: 311,
        aspectRatio: 0.65,
        backgroundColor: variables.green,
        borderWidth: 1,
        borderColor: variables.yellowish,
        justifyContent: 'space-between',
      },
      horizontal: {
        transform: [{ rotate: '90deg' }],
      },
      greatAreaUp: {
        borderTopWidth: 0,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: variables.yellowish,
        height: '20%',
        marginHorizontal: '15%',
      },
      smallAreaUp: {
        borderTopWidth: 0,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: variables.yellowish,
        height: '50%',
        marginHorizontal: '20%',
      },
      greatAreaDown: {
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 0,
        borderColor: variables.yellowish,
        height: '20%',
        marginHorizontal: '15%',
        justifyContent: 'flex-end',
      },
      smallAreaDown: {
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 0,
        borderColor: variables.yellowish,
        height: '50%',
        marginHorizontal: '20%',
      },
      center: {
        position: 'relative',
      },
      centerLine: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: variables.yellowish,
      },
      centerCircle: {
        position: 'absolute',
        marginLeft: '35%',
        marginRight: '35%',
        marginTop: '62.5%',
        marginBottom: '55%',
        borderWidth: 1,
        borderColor: variables.yellowish,
        width: '30%',
        aspectRatio: 1,
        borderRadius: 80,
      },
      constants: {},
    },
  })

export default styles
