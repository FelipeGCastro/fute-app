import { useCallback, useEffect, useMemo, useState } from 'react'
import { ITeam, IVote, useFieldContext } from '/contexts/field'
import { socket } from '/services/io'

interface ITeamsResponse extends ITeam {
  _count: {
    teamVoted: number
  }
  teamVoting: {
    teamVotedDeviceId: string
  }
}
interface IResponse {
  action: 'update-votes' | 'update-teams'
  data: ITeamsResponse[] | IVote[]
}

export const useField = (field: IFieldsType) => {
  const { updateTeams, updateVotes, votes, teams, myDeviceId } =
    useFieldContext()
  const [loading, setLoading] = useState(false)

  const hasTeam = useMemo(() => {
    return teams.findIndex(team => team.deviceId === myDeviceId) !== -1
  }, [teams, myDeviceId])

  const voted = useMemo(
    () => teams.find(team => team.deviceId === myDeviceId)?.voted,
    [teams, myDeviceId],
  )

  useEffect(() => {
    socket.on(field, ({ action, data }: IResponse) => {
      if (action === 'update-teams') {
        const formatData = data as ITeamsResponse[]
        console.log('data:', JSON.stringify(data, null, 2))
        const formattedTeams = formatData.map(item => ({
          ...item,
          votes: item._count?.teamVoted,
          voted: item.teamVoting?.teamVotedDeviceId,
        }))
        updateTeams(formattedTeams as ITeamsResponse[])
      } else if (action === 'update-votes') {
        updateVotes(data as IVote[])
      }
    })
    socket.emit(field, { action: 'fetch-teams' } as IPayload)
    return () => {
      socket.off(field)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const voteCaptain = useCallback(
    async (votedDeviceId: string) => {
      setLoading(false)

      socket.emit(
        field,
        {
          deviceId: myDeviceId,
          action: 'vote-captain',
          votedDeviceId,
        } as IPayload,
        () => setLoading(true),
      )
    },
    [field, myDeviceId],
  )

  const removeTeam = useCallback(
    async (deviceId: string) => {
      setLoading(false)
      socket.emit(field, { deviceId, action: 'remove-team' } as IPayload, () =>
        setLoading(true),
      )
    },
    [field],
  )

  const addNextTeam = useCallback(
    async (teamName: string) => {
      setLoading(false)
      socket.emit(
        field,
        { deviceId: myDeviceId, action: 'add-team', teamName } as IPayload,
        () => setLoading(true),
      )
    },
    [field, myDeviceId],
  )

  return {
    removeTeam,
    addNextTeam,
    voteCaptain,
    loading,
    votes,
    teams,
    hasTeam,
    voted,
  }
}
