import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {View} from 'react-native'
import Modal from 'react-native-modal'
import PropTypes from 'prop-types'

import {useStylesContext} from 'hooks/styles'

import {COMMON_PROP_TYPES} from 'utils/propTypes'

import stylesheets from './styles'

const ModalTooltipContainer = forwardRef(
  (
    {
      autoCloseTime,
      children,
      marginBottom,
      marginTop,
      swipeDirection,
      testID,
      onClose,
    },
    ref,
  ) => {
    ref = ref || {}
    ref.current = {}
    ref.current.onClose = () => {
      refModal.current?.close()
      setIsVisible(false)
    }

    const [styles, styleConstants] = useStylesContext(stylesheets)

    const [isVisible, setIsVisible] = useState(true)

    const refModal = useRef()

    const containerStyles = useMemo(
      () => [
        styles.container,
        swipeDirection === 'down' && styles.containerDown,
        swipeDirection === 'up' && styles.containerUp,
      ],
      [styles, swipeDirection],
    )

    const animationIn = useMemo(
      () => (swipeDirection === 'down' ? 'slideInUp' : 'slideInDown'),
      [swipeDirection],
    )

    const animationOut = useMemo(
      () => (swipeDirection === 'down' ? 'slideOutDown' : 'slideOutUp'),
      [swipeDirection],
    )

    useEffect(() => {
      if (!isVisible) {
        setTimeout(() => {
          refModal.current?.close()
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

    const handleClose = useCallback(() => {
      setIsVisible(false)
    }, [])

    const renderChildren = () => (
      <View
        style={[
          styles.content,
          Boolean(marginBottom) && {marginBottom},
          Boolean(marginTop) && {marginTop},
        ]}
      >
        {children}
      </View>
    )

    return (
      <Modal
        testID={testID}
        ref={refModal}
        style={containerStyles}
        isVisible={isVisible}
        backdropOpacity={styleConstants.backdropOpacity}
        hideModalContentWhileAnimating
        swipeDirection={swipeDirection}
        onSwipeComplete={handleClose}
        onBackdropPress={handleClose}
        onAccessibilityEscape={handleClose}
        useNativeDriverForBackdrop
        propagateSwipe={true}
        animationIn={animationIn}
        animationInTiming={styleConstants.animationInTiming}
        animationOut={animationOut}
        animationOutTiming={styleConstants.animationOutTiming}
      >
        {renderChildren()}
      </Modal>
    )
  },
)

ModalTooltipContainer.defaultProps = {
  swipeDirection: 'down',
  testID: 'modal-toast',
  onClose: () => {},
}

ModalTooltipContainer.propTypes = {
  autoCloseTime: COMMON_PROP_TYPES.autoCloseTime,
  children: COMMON_PROP_TYPES.children.isRequired,
  marginBottom: PropTypes.number,
  marginTop: PropTypes.number,
  swipeDirection: PropTypes.oneOf(['down', 'up']),
  testID: COMMON_PROP_TYPES.testID,
  onClose: PropTypes.func.isRequired,
}

export default ModalTooltipContainer
