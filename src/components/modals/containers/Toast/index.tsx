import { useState, useEffect, useCallback, ReactNode } from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'

import { useStylesContext } from 'hooks/styles'

import stylesheets from './styles'
import { useModal } from '/hooks/modal'

interface Props {
  forceClose: boolean
  autoCloseTime?: number
  children: ReactNode
  marginTop?: number
  onClose?: () => void
}

const ModalToastContainer = ({
  forceClose,
  autoCloseTime = 0,
  children,
  marginTop = 1,
  onClose,
}: Props) => {
  const [isVisible, setVisible] = useState(true)
  const [styles, styleConstants] = useStylesContext(stylesheets)
  const { closeModal } = useModal()
  const handleClose = useCallback(() => {
    setVisible(false)
  }, [])

  useEffect(() => {
    if (forceClose) {
      handleClose()
    }
  }, [forceClose, handleClose])

  useEffect(() => {
    if (!isVisible && onClose) {
      setTimeout(() => {
        onClose()
      }, styleConstants.modalTiming)
    }
  }, [isVisible, styleConstants, onClose])

  useEffect(() => {
    const autoCloseTimer = setTimeout(() => {
      if (autoCloseTime) {
        handleClose()
      }
    }, autoCloseTime)

    return () => clearTimeout(autoCloseTimer)
  }, [autoCloseTime, handleClose])

  const renderChildren = () => (
    <View style={[styles.content, Boolean(marginTop) && { marginTop }]}>
      {children}
    </View>
  )

  const handleModalClosed = () => {
    onClose && onClose()
    closeModal()
  }

  return (
    <Modal
      style={styles.container}
      isVisible={isVisible}
      backdropOpacity={styleConstants.backdropOpacity}
      hideModalContentWhileAnimating
      swipeDirection="up"
      onModalHide={handleModalClosed}
      onSwipeComplete={handleClose}
      onBackdropPress={handleClose}
      onAccessibilityEscape={handleClose}
      useNativeDriverForBackdrop
      propagateSwipe={true}
      animationIn="slideInDown"
      animationOut="slideOutUp">
      {renderChildren()}
    </Modal>
  )
}

export default ModalToastContainer
