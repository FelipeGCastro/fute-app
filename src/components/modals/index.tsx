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
  console.log('modal RENDERED', modalProps)
  return ModalComponent ? (
    <ModalComponent
      {...modalProps}
      //@ts-ignore
      onClose={() => {
        if (typeof modalProps?.onClose === 'function') {
          modalProps?.onClose()
        }
      }}
    />
  ) : null
}

export default ModalManager
