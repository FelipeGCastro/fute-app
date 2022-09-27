import { useState, useEffect, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSettings } from '/contexts/settings'

export const useAppTheme = (isDeviceDarkMode: boolean) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { settings } = useSettings()
  const useDarkMode = settings?.useDarkMode

  const getAppTheme = useCallback(async () => {
    const settingsOptions = await AsyncStorage.getItem('SETTINGS_OPTIONS')
    const appTheme = settingsOptions && JSON.parse(settingsOptions)?.useDarkMode

    setIsDarkMode(appTheme === undefined ? !!isDeviceDarkMode : appTheme)
  }, [isDeviceDarkMode])

  useEffect(() => {
    getAppTheme()
  }, [useDarkMode, getAppTheme])

  return {
    isDarkMode,
  }
}
