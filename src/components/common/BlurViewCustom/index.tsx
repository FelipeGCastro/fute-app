import React, { ReactNode } from 'react'
import { Platform, View, ViewProps, ViewStyle } from 'react-native'
import { BlurView, BlurViewProps } from '@react-native-community/blur'

const isAndroid = Platform.OS === 'android'

type Props = BlurViewProps & {
  children: ReactNode
  style?: ViewStyle | ViewStyle[]
}

export const BlurViewCustom = ({ children, style, ...rest }: Props) => {
  const styles: ViewStyle = Array.isArray(style)
    ? ((style as ViewStyle[]).reduce((prev, curr) => {
        return { ...prev, ...curr }
      }) as ViewStyle)
    : (style as ViewStyle)
  const borderRadiusStyles = {
    borderTopRightRadius:
      styles?.borderRadius || styles?.borderTopRightRadius || 0,
    borderTopLeftRadius:
      styles?.borderRadius || styles?.borderTopLeftRadius || 0,
    borderBottomRightRadius:
      styles?.borderRadius || styles?.borderBottomRightRadius || 0,
    borderBottomLeftRadius:
      styles?.borderRadius || styles?.borderBottomRightRadius || 0,
    borderRadius: styles?.borderRadius || 0,
  }

  const androidStyle = {
    flexGrow: styles?.flex || 1,
    paddingTop:
      styles?.paddingVertical || styles?.paddingTop || styles?.padding || 0,
    paddingBottom:
      styles?.paddingVertical || styles?.paddingBottom || styles?.padding || 0,
    backgroundColor: 'transparent',
    paddingVertical: styles?.paddingVertical || styles?.padding || 0,
    paddingHorizontal: styles?.paddingHorizontal || styles?.padding || 0,
    padding: styles?.padding || 0,
    flexDirection: styles?.flexDirection || 'column',
    alignItems: styles?.alignItems || 'flex-start',
    justifyContent: styles?.justifyContent || 'space-between',
    overflow: 'hidden',
    ...borderRadiusStyles,
  } as ViewProps

  const overrideStyle = {
    paddingVertical: 0,
    paddingHorizontal: 0,
    padding: 0,
    position: styles?.position || 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }

  const renderIOS = () => (
    <BlurView style={style} {...rest}>
      {children}
    </BlurView>
  )
  const renderAndroid = () => (
    <View style={androidStyle}>
      <BlurView
        // @ts-ignore
        overlayColor="transparent"
        style={[styles, overrideStyle]}
        {...rest}
      />
      {children}
    </View>
  )

  return isAndroid ? renderAndroid() : renderIOS()
}
