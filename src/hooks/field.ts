import { useCallback, useEffect, useMemo, useState } from 'react'
import { ITeam, IVote, useFieldContext } from '/contexts/field'
import { socket } from '/services/io'
interface IResponse {
  action: 'update-votes' | 'update-teams'
  data: ITeam[] | IVote[]
}

export const useField = (field: IFieldsType) => {
  const { updateTeams, updateVotes, votes, teams, myDeviceId } =
    useFieldContext()
  const [loading, setLoading] = useState(false)

  const hasTeam = useMemo(() => {
    return teams.findIndex(team => team.deviceId === myDeviceId) !== -1
  }, [teams, myDeviceId])

  useEffect(() => {
    socket.on(field, ({ action, data }: IResponse) => {
      if (action === 'update-teams') {
        updateTeams(data as ITeam[])
      } else if (action === 'update-votes') {
        updateVotes(data as IVote[])
      }
    })
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
  }
}
