import { useState, useEffect, useMemo, useCallback, ReactNode } from 'react'
import { createContext } from 'react'
import { StyleSheet } from 'react-native'
import Orientation, { OrientationType } from 'react-native-orientation-locker'
import { useDarkMode } from 'react-native-dynamic'
import DeviceInfo from 'react-native-device-info'
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets'

import { useAppTheme } from 'hooks/settings'

import {
  commonVariables,
  sizeVariables,
  lightVariables,
  darkVariables,
} from 'styles/variables'

const getOrientation = (newOrientation?: OrientationType) => {
  const orientation = newOrientation || Orientation.getInitialOrientation()
  //@ts-ignore
  return orientation?.includes('PORTRAIT') ? 'portrait' : 'landscape'
}

const getInsets = (insets: {
  safeAreaInsetsTop: number
  safeAreaInsetsBottom: number
  safeAreaInsetsLeft: number
  safeAreaInsetsRight: number
}) => ({
  top: insets.safeAreaInsetsTop,
  right: insets.safeAreaInsetsRight,
  bottom: insets.safeAreaInsetsBottom,
  left: insets.safeAreaInsetsLeft,
})

const useVariables = (
  isDarkMode: boolean,
  safeAreaInsets: { top: number; bottom: number; right: number; left: number },
) => {
  const variables = {
    ...commonVariables,
    ...sizeVariables(safeAreaInsets),
    ...(isDarkMode ? darkVariables : lightVariables),
  }

  return variables
}

interface IStylesContext {
  stylesParser: (stylesheets: Record<string, any>) => void
}
export const StylesContext = createContext({} as IStylesContext)
interface IStylesProvider {
  children: ReactNode
}
export const StylesProvider = ({ children }: IStylesProvider) => {
  const isDeviceDarkMode = useDarkMode()
  const { isDarkMode } = useAppTheme(!!isDeviceDarkMode)

  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    getOrientation(),
  )
  const [safeAreaInsets, setSafeAreaInsets] = useState(
    getInsets(StaticSafeAreaInsets),
  )

  const styleVariables = useVariables(isDarkMode, safeAreaInsets)

  const breakpoint = useMemo(() => {
    const isPhone = DeviceInfo.getDeviceType() === 'Handset'
    const isTablet = DeviceInfo.getDeviceType() === 'Tablet'

    if (isPhone) {
      return 'phonePortrait'
    } else if (isTablet && orientation === 'portrait') {
      return 'tabletPortrait'
    } else if (isTablet && orientation === 'landscape') {
      return 'tabletLandscape'
    }

    return 'phonePortrait'
  }, [orientation])

  const handleOrientationChange = useCallback(
    (newOrientation: OrientationType) => {
      setOrientation(getOrientation(newOrientation))

      StaticSafeAreaInsets.getSafeAreaInsets(values =>
        setSafeAreaInsets(getInsets(values)),
      )
    },
    [],
  )

  useEffect(() => {
    const isPhone = DeviceInfo.getDeviceType() === 'Handset'
    const isTablet = DeviceInfo.getDeviceType() === 'Tablet'

    if (isPhone) {
      Orientation.lockToPortrait()
    } else if (isTablet) {
      Orientation.addOrientationListener(handleOrientationChange)
    }

    return () => {
      if (isTablet) {
        Orientation.removeOrientationListener(handleOrientationChange)
      }
    }
  }, [handleOrientationChange])

  const stylesParser = useCallback(
    // @ts-ignore
    stylesheets => {
      const styles = stylesheets
        ? // @ts-ignore
          stylesheets(styleVariables)
        : {}
      // @ts-ignore
      const mergedStyles = { ...styles.common, ...styles[breakpoint] }
      const { constants, ...stylesheetStyles } = mergedStyles

      return [
        StyleSheet.create(stylesheetStyles),
        constants,
        breakpoint,
        isDarkMode,
      ]
    },
    [styleVariables, breakpoint, isDarkMode],
  )

  return (
    <StylesContext.Provider value={{ stylesParser }}>
      {children}
    </StylesContext.Provider>
  )
}
