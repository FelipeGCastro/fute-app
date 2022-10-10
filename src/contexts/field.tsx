import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { getUniqueId } from 'react-native-device-info'

export interface IField {
  type: string
  timer: Date
  pausedAt: Date
  status: 'paused' | 'initial' | 'played'
}
export interface IVote {
  teamVotedDeviceId: string
  teamVotingDeviceId: string
}
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
  field: IField
  myDeviceId: string
  isCaptain: boolean
  captain: string
  updateField: (field: IField) => void
  updateTeams: (teams: ITeam[]) => void
  updateVotes: (votes: IVote[]) => void
  resetField: () => void
}

const FieldContext = createContext({} as IFieldContext)

interface IFieldProvider {
  children: ReactNode
}

export const FieldProvider = ({ children }: IFieldProvider) => {
  const [teams, setTeams] = useState<ITeam[]>([])
  const [votes, setVotes] = useState<IVote[]>([])
  const [field, setField] = useState<IField>({} as IField)
  const [myDeviceId, setMyDeviceId] = useState('')

  useEffect(() => {
    const getDeviceId = async () => {
      const deviceId = await getUniqueId()
      setMyDeviceId(deviceId)
    }
    getDeviceId()
  }, [])

  const resetField = useCallback(() => {
    setTeams([])
    setVotes([])
    setField({} as IField)
  }, [])
  const captain = useMemo(() => {
    if (!teams.length) {
      return ''
    }
    const sortedTeams = teams.sort((a, b) => a.position - b.position)
    let mostVoted = sortedTeams[0]
    let mostVotedVotes = sortedTeams[0].votes

    for (let i = 0; i < teams.length; i++) {
      if (mostVotedVotes < teams[i].votes) {
        mostVoted = teams[i]
        mostVotedVotes = teams[i].votes
      }
    }
    return mostVoted.deviceId
  }, [teams])

  const isCaptain = myDeviceId === captain

  const updateField = useCallback((fieldToUpdate: IField) => {
    setField(fieldToUpdate)
  }, [])
  const updateTeams = useCallback((teamsToUpdate: ITeam[]) => {
    setTeams(teamsToUpdate)
  }, [])
  const updateVotes = useCallback((votesToUpdate: IVote[]) => {
    setVotes(votesToUpdate)
  }, [])

  return (
    <FieldContext.Provider
      value={{
        teams,
        updateTeams,
        votes,
        isCaptain,
        captain,
        updateVotes,
        myDeviceId,
        field,
        updateField,
        resetField,
      }}>
      {children}
    </FieldContext.Provider>
  )
}

export const useFieldContext = () => {
  const fieldContext = useContext(FieldContext)

  return fieldContext
}
