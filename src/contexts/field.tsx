import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'
export interface ITeam {
  id: string
  name: string
  position: number
  isCaptain: boolean
  votes: number
}

interface IFieldContext {
  teamsQueue: ITeam[]
  addTeams: (teams: ITeam[]) => void
}

const FieldContext = createContext({} as IFieldContext)

interface IFieldProvider {
  children: ReactNode
}

export const FieldProvider = ({ children }: IFieldProvider) => {
  const [teamsQueue, setTeamsQueue] = useState<ITeam[]>([])

  const addTeams = useCallback((teams: ITeam[]) => {
    setTeamsQueue(teams)
  }, [])

  return (
    <FieldContext.Provider value={{ teamsQueue, addTeams }}>
      {children}
    </FieldContext.Provider>
  )
}

export const useFieldContext = () => {
  const fieldContext = useContext(FieldContext)

  return fieldContext
}
