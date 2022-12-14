type ConstantsType = { [key: string]: any }
type StyleConstants = { constants?: ConstantsType }

type StylesProps =
  | import('react-native').TextStyle
  | import('react-native').ViewStyle
  | (import('react-native').ImageStyle & ConstantsType)

type SpecialKey = { [key: string | 'constants']: StylesProps }

type BreakPointType = 'phonePortrait' | 'tabletPortrait' | 'tabletLandscape'

type StyleSheetTypeHook = SpecialKey
// interface StyleSheetTypeHook extends StyleConstants {
//         [key: string]: StylesProps
// }
interface IStyles {
  common: StyleSheetTypeHook
  phonePortrait?: StyleSheetTypeHook
  tabletPortrait?: StyleSheetTypeHook
  tabletLandscape?: StyleSheetTypeHook
}
type AllVariablesType = typeof import('../../styles/variables').allVariables

type StylesHook = (variables: AllVariablesType) => IStyles

type IFieldsType = 'fieldA' | 'fieldB' | 'fieldC' | 'fieldD' | 'fieldE'

interface IPayload {
  action:
    | 'vote-captain'
    | 'remove-team'
    | 'add-team'
    | 'fetch-teams'
    | 'timer-pause'
    | 'timer-play'
    | 'timer-reset'
  deviceId: string
  teamName: string
  votedDeviceId: string
  deviceIdToRemove: string
  deviceIdToAddNext: string
}

declare module '*.png' {
  const value: any
  export = value
}
