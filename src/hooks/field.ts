import { useCallback, useEffect } from 'react'
import { ITeam, useFieldContext } from '/contexts/field'
import { api } from '/services/api'
import { socket } from '/services/io'

interface IResponseTeams {
  teams: ITeam[]
}

export const useField = (field: IFieldsType) => {
  const { addTeams } = useFieldContext()

  useEffect(() => {
    socket.on(`field${field}`, (teams: ITeam[]) => {
      if (teams.length) {
        addTeams(teams)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const removeTeam = useCallback(async (id: string) => {
    try {
      await api.delete<IResponseTeams>(`api/queue/${id}`)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const addNextTeam = useCallback(async (team: { name: string }) => {
    try {
      await api.post<IResponseTeams>('api/queue', { team })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return {
    removeTeam,
    addNextTeam,
  }
}
