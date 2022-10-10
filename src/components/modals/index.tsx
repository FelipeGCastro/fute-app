import { Text, View } from 'react-native'
import ToastError from './ToastError'
import { useModal } from '/hooks/modal'

const modals = [
  {
    key: 'ToastError',
    component: ToastError,
  },
] as const

const mapModalsName = modals.map(item => item.key)
export type ModalsName = typeof mapModalsName[number]

const ModalManager = () => {
  const { modal: selectedModal, modalProps } = useModal()

  const ModalComponent = modals.find(
    modal => modal.key === selectedModal,
  )?.component

  return ModalComponent ? <ModalComponent {...modalProps} /> : null
}

export default ModalManager
