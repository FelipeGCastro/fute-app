import { useTranslate, t as tType } from 'react-polyglot'

const usePolyglot = (prefix?: string) => {
  const t: tType = useTranslate()
  return (key: string, args?: Record<string, string>) =>
    t([prefix, key].filter(s => s).join('.'), args)
}

export default usePolyglot
