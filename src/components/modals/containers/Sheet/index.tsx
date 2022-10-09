import { useState, useEffect, useCallback, ReactNode } from 'react'
import Modal, { PresentationStyle } from 'react-native-modal'
import PropTypes from 'prop-types'

import { useStylesContext } from 'hooks/styles'

import stylesheets from './styles'
import { useModal } from '/hooks/modal'

interface IModal {
  forceClose?: boolean
  onClose?: () => void
  children: ReactNode
  presentationStyle: PresentationStyle
}

const ModalSheetContainer = ({
  forceClose,
  onClose,
  children,
  presentationStyle = 'formSheet',
}: IModal) => {
  const [styles] = useStylesContext(stylesheets)

  const [visible, setVisible] = useState(true)
  const { closeModal } = useModal()
  const handleClose = useCallback(() => {
    setVisible(false)
  }, [])

  useEffect(() => {
    if (forceClose) {
      handleClose()
    }
  }, [forceClose, handleClose])

  const handleModalClosed = () => {
    onClose && onClose()
    closeModal()
  }

  return (
    <Modal
      isVisible={visible}
      hasBackdrop={false}
      presentationStyle={presentationStyle}
      onModalHide={handleModalClosed}
      useNativeDriver
      swipeDirection="down"
      animationOut="slideOutDown"
      animationIn="slideInUp"
      // @ts-ignore
      transparent={false}
      hideModalContentWhileAnimating
      style={styles.container}>
      {children}
    </Modal>
  )
}

ModalSheetContainer.defaultProps = {
  presentationStyle: 'pageSheet',
}
ModalSheetContainer.propTypes = {
  forceClose: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.object,
  presentationStyle: PropTypes.oneOf(['pageSheet', 'formSheet']),
}

export default ModalSheetContainer
