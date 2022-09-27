import { ReactNode } from 'react'
import { I18n } from 'react-polyglot'
import { phrases as en } from '/translations/en'
import { phrases as pt } from '/translations/pt'
import { NativeModules, Platform } from 'react-native'

interface IPolyglotProvider {
  children: ReactNode
}
export const PolyglotProvider = ({ children }: IPolyglotProvider) => {
  const translations = {
    en,
    pt,
    en_PT: en,
    pt_PT: pt,
    pt_BR: en,
  }
  // iOS:

  const locale: keyof typeof translations =
    Platform.OS === 'android'
      ? NativeModules.I18nManager.localeIdentifier
      : NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]

  const messages = translations[locale] || translations.en
  return (
    <I18n locale="en" messages={messages}>
      {children}
    </I18n>
  )
}
