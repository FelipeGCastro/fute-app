import { createContext, ReactNode, useState } from 'react'
import { ModalsName } from '/components/modals'
import { ToastProps } from '/components/modals/ToastError'
type ModalProps = ToastProps
export interface IModalContext {
  modal: ModalsName | null
  modalProps: ModalProps
  openModal: (a: { modalName: ModalsName; modalPropsData?: ModalProps }) => void
  closeModal: () => void
  updateModalProps: (newProps: ModalProps) => void
}
export const ModalContext = createContext({} as IModalContext)

interface IModalProvider {
  children: ReactNode
}
export const ModalProvider = ({ children }: IModalProvider) => {
  const [modal, setModal] = useState<ModalsName | null>(null)
  const [modalProps, setModalProps] = useState<ModalProps>({} as ModalProps)
  console.log('modal:', modal)
  console.log('modalProps:', modalProps)
  const openModal = ({
    modalName,
    modalPropsData = {} as ModalProps,
  }: {
    modalName: ModalsName
    modalPropsData?: ModalProps
  }) => {
    setModal(modalName)
    setModalProps(modalPropsData)
  }
  const closeModal = () => {
    setModal(null)
    setModalProps({} as ModalProps)
  }
  const updateModalProps = (newProps: ModalProps) => {
    setModalProps(prev => ({ ...prev, ...newProps }))
  }
  return (
    <ModalContext.Provider
      value={{
        modal,
        modalProps,
        openModal,
        closeModal,
        updateModalProps,
      }}>
      {children}
    </ModalContext.Provider>
  )
}
