import { useState } from 'react'
import { Text, View } from 'react-native'

import { useStylesContext } from 'hooks/styles'

import ModalToastContainer from '../containers/Toast'

import ButtonDefault from 'components/common/ButtonDefault'

import stylesheets from './styles'
import { BlurViewCustom } from '/components/common/BlurViewCustom'

export interface ToastProps {
  buttonPrimary?: { label: string; action: () => void }
  buttonSecondary?: { label: string; action: () => void }
  text: string
  title: string
  onClose?: () => void
}

const ToastError = ({
  buttonPrimary,
  buttonSecondary,
  text,
  title,
  onClose,
}: ToastProps) => {
  const [styles, styleConstants] = useStylesContext(stylesheets)
  const [forceClose, setForceClose] = useState(false)

  const handleClose = () => {
    setForceClose(true)
  }

  const renderTitle = () => {
    if (!title) {
      return
    }

    return <Text style={styles.titleText}>{title}</Text>
  }

  const renderText = () => {
    if (!text) {
      return
    }

    return <Text style={styles.text}>{text}</Text>
  }

  const renderButtons = () => {
    const handleSecondaryAction = () => {
      buttonSecondary?.action()
      handleClose()
    }

    const handlePrimaryAction = () => {
      buttonPrimary?.action()
      handleClose()
    }

    return (
      <View style={styles.buttonWrapper}>
        {buttonSecondary && (
          <ButtonDefault
            text={buttonSecondary.label}
            onPress={handleSecondaryAction}
          />
        )}

        {buttonPrimary && (
          <ButtonDefault
            text={buttonPrimary.label}
            onPress={handlePrimaryAction}
          />
        )}
      </View>
    )
  }

  return (
    <ModalToastContainer
      marginTop={styleConstants.topMargin}
      forceClose={forceClose}
      onClose={onClose}>
      <BlurViewCustom
        style={styles.container}
        blurType="light"
        blurAmount={styleConstants.blurAmount}>
        {renderTitle()}
        {renderText()}
        {renderButtons()}
      </BlurViewCustom>
    </ModalToastContainer>
  )
}

export default ToastError
