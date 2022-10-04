import { useEffect, useRef, useState } from 'react'
import { Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import { useStylesContext } from 'hooks/styles'
import stylesheets from './styles'
import Animated, { Layout } from 'react-native-reanimated'
import { getInputProps } from '/utils/form'

interface Props extends TextInputProps {
  onChangeText: (value: string) => void
  defaultValue?: string
  defaultFocused?: boolean
  error?: string
  label?: string
  big?: boolean
  personalizedType?:
    | 'firstName'
    | 'lastName'
    | 'fullName'
    | 'email'
    | 'password'
    | 'birthdate'
    | 'newPassword'
}

const InputFieldText = ({
  onChangeText,
  defaultValue,
  defaultFocused,
  error,
  label,
  personalizedType,
  big,
  ...inputProps
}: Props) => {
  const [styles] = useStylesContext(stylesheets)
  const [focused, setFocused] = useState(false)
  const [internalValue, setInternalValue] = useState(defaultValue)
  const refInput = useRef<TextInput>(null)

  useEffect(() => {
    setFocused(!!defaultFocused)
  }, [defaultFocused])

  const focusedOrValue = focused || !!internalValue

  const inputPersonalizedType = personalizedType
    ? getInputProps(personalizedType)
    : {}

  const inputFinalProps = { ...inputPersonalizedType, inputProps }

  const handleChangeText = (value: string) => {
    setInternalValue(value)
    onChangeText(value)
  }

  const handleInputPress = () => {
    refInput?.current?.focus()
    setFocused(true)
  }
  const handleOnFocus = () => {
    setFocused(true)
  }

  const handleOnBlur = () => {
    setFocused(false)
  }

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleInputPress}
        style={[styles.inputContainer, big && styles.big]}>
        <Animated.View layout={Layout.springify()}>
          <Text
            style={[
              styles.labelInput,
              focusedOrValue && styles.labelInputSmall,
            ]}>
            {label}
          </Text>
          {focusedOrValue && (
            <TextInput
              ref={refInput}
              autoFocus
              onChangeText={handleChangeText}
              value={internalValue}
              multiline={!!big}
              textAlignVertical={big ? 'top' : 'auto'}
              style={[styles.input, big && styles.bigInput]}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              {...inputFinalProps}
            />
          )}
        </Animated.View>
      </TouchableOpacity>
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </>
  )
}

export default InputFieldText
