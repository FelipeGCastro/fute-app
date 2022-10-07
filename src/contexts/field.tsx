import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { getUniqueId } from 'react-native-device-info'

export interface IVote {
  teamVotedDeviceId: string
  teamVotingDeviceId: string
}
export interface ITeam {
  id: string
  deviceId: string
  name: string
  position: number
  votes: number
  voted: string
}

interface IFieldContext {
  teams: ITeam[]
  votes: IVote[]
  myDeviceId: string
  updateTeams: (teams: ITeam[]) => void
  updateVotes: (votes: IVote[]) => void
}

const FieldContext = createContext({} as IFieldContext)

interface IFieldProvider {
  children: ReactNode
}

export const FieldProvider = ({ children }: IFieldProvider) => {
  const [teams, setTeams] = useState<ITeam[]>([])
  const [votes, setVotes] = useState<IVote[]>([])
  const [myDeviceId, setMyDeviceId] = useState('')

  useEffect(() => {
    const getDeviceId = async () => {
      const deviceId = await getUniqueId()
      setMyDeviceId(deviceId)
    }
    getDeviceId()
  }, [])

  const updateTeams = useCallback((teamsToUpdate: ITeam[]) => {
    setTeams(teamsToUpdate)
  }, [])
  const updateVotes = useCallback((votesToUpdate: IVote[]) => {
    setVotes(votesToUpdate)
  }, [])

  return (
    <FieldContext.Provider
      value={{ teams, updateTeams, votes, updateVotes, myDeviceId }}>
      {children}
    </FieldContext.Provider>
  )
}

export const useFieldContext = () => {
  const fieldContext = useContext(FieldContext)

  return fieldContext
}
