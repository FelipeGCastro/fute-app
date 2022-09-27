import { useContext } from 'react'

import { StylesContext } from '/contexts/styles'

interface StylesGenericType<T, P, R> {
  (a: T): { common: { constants: R } | P }
}

export const useStylesContext = <T, P, R>(
  stylesheets: StylesGenericType<T, P, R>,
): [P, R, unknown, unknown] => {
  const { stylesParser } = useContext(StylesContext)
  // @ts-ignore
  return stylesParser(stylesheets)
}
