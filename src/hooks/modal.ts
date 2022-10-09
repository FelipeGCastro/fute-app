import { useContext } from 'react'
import { ModalContext } from '/contexts/modal'

export const useModal = () => {
  const modalContext = useContext(ModalContext)
  return modalContext
}
