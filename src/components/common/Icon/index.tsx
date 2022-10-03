import { StyleProp, TextStyle } from 'react-native'

import { FontAwesome, MaterialIcons } from '@expo/vector-icons'

const iconNames = {
  play: FontAwesome,
  pause: FontAwesome,
  plus: FontAwesome,
  replay: MaterialIcons,
} as const

export type IconNames = keyof typeof iconNames
interface Props {
  name: IconNames
  size?: number
  color?: string
  style?: StyleProp<TextStyle>
}

const Icon = ({ name, size = 30, color = '#313131', style }: Props) => {
  const IconComponent = iconNames[name]

  return (
    <IconComponent
      style={style}
      name={name as 'link'} // only set as link to avoid ts error
      size={size}
      color={color}
    />
  )
}

export default Icon
