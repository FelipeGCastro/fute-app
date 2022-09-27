import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface ISettingsOptions {
  useDarkMode: boolean
}

interface ISettingsContext {
  settings: ISettingsOptions
  saveSettingsOptionsStorage: (options: ISettingsOptions) => void
}

const SettingsContext = createContext({} as ISettingsContext)

interface ISettingsProvider {
  children: ReactNode
}

export const SettingsProvider = ({ children }: ISettingsProvider) => {
  const [settings, setSettings] = useState({ useDarkMode: false })

  useEffect(() => {
    const fetchSettings = async () => {
      const settingsStoraged = await AsyncStorage.getItem('SETTINGS_OPTIONS')
      if (settingsStoraged) {
        setSettings(JSON.parse(settingsStoraged))
      }
    }
    fetchSettings()
  }, [])

  const saveSettingsOptionsStorage = async (options: ISettingsOptions) => {
    setSettings(prev => ({ ...prev, options }))
    await AsyncStorage.setItem('SETTINGS_OPTIONS', JSON.stringify(options))
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettingsOptionsStorage,
      }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
  const settingsContext = useContext(SettingsContext)
  return settingsContext
}
