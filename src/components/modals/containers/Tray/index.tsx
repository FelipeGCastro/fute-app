import { useState, useEffect, useCallback, ReactNode } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import Modal from 'react-native-modal'

import { useStylesContext } from 'hooks/styles'

import stylesheets from './styles'
import { BlurViewCustom } from '/components/common/BlurViewCustom'
import { useModal } from '/hooks/modal'

interface IModal {
  children: ReactNode
  forceClose?: boolean
}

const ModalTrayContainer = ({ children, forceClose }: IModal) => {
  const [styles, styleConstants] = useStylesContext(stylesheets)
  const [isVisible, setIsVisible] = useState(true)
  const { closeModal } = useModal()

  useEffect(() => {
    if (forceClose) {
      setIsVisible(false)
    }
  }, [forceClose])

  const handleClose = useCallback(() => {
    setIsVisible(false)
  }, [])

  const renderBackdrop = () => (
    <TouchableWithoutFeedback onPress={handleClose}>
      <View style={styles.backdropContainer}>
        <BlurViewCustom
          style={styles.backdrop}
          blurType="light"
          blurAmount={styleConstants.blurAmount}>
          <View />
        </BlurViewCustom>
      </View>
    </TouchableWithoutFeedback>
  )

  return (
    <>
      {isVisible && renderBackdrop()}
      <Modal
        testID="modal"
        isVisible={isVisible}
        backdropOpacity={0}
        // hideModalContentWhileAnimating
        onModalHide={closeModal}
        // onSwipeComplete={handleClose}
        // swipeDirection={'down'}
        onBackdropPress={handleClose}
        onAccessibilityEscape={handleClose}
        useNativeDriverForBackdrop
        // onDismiss={handleDismiss}
        style={styles.container}
        // propagateSwipe={true}
      >
        {children}
      </Modal>
    </>
  )
}

export default ModalTrayContainer
