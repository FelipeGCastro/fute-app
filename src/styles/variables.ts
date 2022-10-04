import { Dimensions, Platform } from 'react-native'

export const commonVariables = {
  // Fonts
  fontDefault: 'sans-serif',
  // Margins

  // Margins
  margin_900: 72,
  margin_800: 64,
  margin_700: 56,
  margin_600: 48,
  margin_500: 40,
  margin_400: 32,
  margin_300: 24,
  margin_200: 16,
  margin_100: 8,
  margin_50: 4,
  margin_25: 2,

  // Border Radius
  border_xs: 2,
  border_s: 4,
  border_m: 8,
  border_l: 12,

  // Dimensions
  iconSmallSize: 16,
  iconSize: 24,

  // Border Radius
  borderRegular: 16,

  // Action Opacities
  fullOpacity: 1,
  highOpacity: 0.95,
  mediumOpacity: 0.85,
  backdropOpacity: 1,
  lowOpacity: 0.6,
  disabledOpacity: 0.3,

  // Animations
  modalTiming: 250,
}

export const sizeVariables = (safeAreaInsets: {
  top: number
  right: number
  bottom: number
  left: number
}) => {
  const screenSize = Dimensions.get('screen')
  const screenWidth = screenSize.width
  const screenHeight = screenSize.height

  const scale = Platform.OS === 'ios' ? 1 : 1

  const topSafeArea = safeAreaInsets.top / scale
  const rightSafeArea = safeAreaInsets.right / scale
  const bottomSafeArea = safeAreaInsets.bottom / scale
  const leftSafeArea = safeAreaInsets.left / scale
  const safeAreaHeight = topSafeArea + bottomSafeArea

  const contentHeight = screenHeight - safeAreaHeight
  const contentWidth = screenWidth - (rightSafeArea + leftSafeArea)

  return {
    topSafeArea,
    rightSafeArea,
    bottomSafeArea,
    leftSafeArea,
    contentWidth,
    contentHeight,
    screenSize,
    screenWidth,
    screenHeight,
  }
}

export const lightVariables = {
  storyBookBackdropColor: '#DCDCDC',

  // Main
  mainColor: '#4F2DEC',
  background: '#191A19',
  white: '#FFFFFF',
  green: '#1E5128',
  negative: '#511E1E',
  greenLight: '#4E9F3D',
  yellowish: '#D8E9A8',
  yellowishOpacity: 'rgba(216,233,168, 0.3)',
  // Typography
  typographyPrimaryColor: '#18181A',
  typographySecondaryColor: '#6D6A78',
}

export const darkVariables = {
  storyBookBackdropColor: '#232323',

  // Main
  mainColor: '#A3A1FF',

  // Typography
  typographyPrimaryColor: '#FFFFFF',
  typographySecondaryColor: '#C9C7C4',
}

export const allVariables = {
  ...commonVariables,
  ...sizeVariables({
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
  }),
  ...lightVariables,
}
