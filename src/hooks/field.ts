import { useNavigation } from '@react-navigation/native'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useModal } from './modal'
import { IField, ITeam, IVote, useFieldContext } from '/contexts/field'
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
  action: 'update-votes' | 'update-teams' | 'update-field'
  data: ITeamsResponse[] | IVote[] | IField
}

export const useField = (field: IFieldsType) => {
  const {
    updateTeams,
    updateVotes,
    votes,
    teams,
    myDeviceId,
    updateField,
    resetField,
  } = useFieldContext()
  const [loading, setLoading] = useState(false)
  const { openModal } = useModal()
  const navigation = useNavigation()

  const hasTeam = useMemo(() => {
    return teams.findIndex(team => team.deviceId === myDeviceId) !== -1
  }, [teams, myDeviceId])

  const voted = useMemo(
    () => teams.find(team => team.deviceId === myDeviceId)?.voted,
    [teams, myDeviceId],
  )

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
    async (deviceIdToRemove?: string) => {
      console.log('myDeviceId:', myDeviceId)
      setLoading(false)
      socket.emit(
        field,
        {
          deviceId: myDeviceId,
          deviceIdToRemove: deviceIdToRemove || myDeviceId,
          action: 'remove-team',
        } as IPayload,
        () => setLoading(true),
      )
    },
    [field, myDeviceId],
  )

  const addNextTeam = useCallback(
    async (teamName?: string, deviceIdToAddNext?: string) => {
      setLoading(false)
      socket.emit(
        field,
        {
          deviceId: myDeviceId,
          deviceIdToAddNext: deviceIdToAddNext,
          action: 'add-team',
          teamName,
        } as IPayload,
        () => setLoading(true),
      )
    },
    [field, myDeviceId],
  )

  const codeErrorMessages = {
    otherField: {
      text: 'Você está em outro campo.',
      buttonPrimary: {
        label: 'Sair do Outro Campo',
        action: removeTeam,
      },
      buttonSecondary: {
        label: 'Voltar',
        action: navigation.goBack,
      },
    },
    notCaptain: {
      text: 'Você não é mais capitão',
      buttonPrimary: {
        label: 'Entendi',
        action: () => ({}),
      },
    },
  }
  interface ErrorCode {
    code: keyof typeof codeErrorMessages
  }

  useEffect(() => {
    socket.on(field, ({ action, data }: IResponse) => {
      if (action === 'update-teams') {
        const formatData = data as ITeamsResponse[]
        const formattedTeams = formatData
          .map(item => ({
            ...item,
            votes: item._count?.teamVoted,
            voted: item.teamVoting?.teamVotedDeviceId,
          }))
          .sort((a, b) => a.position - b.position)
        updateTeams(formattedTeams as ITeamsResponse[])
      } else if (action === 'update-votes') {
        updateVotes(data as IVote[])
      } else if (action === 'update-field') {
        updateField(data as IField)
      }
    })

    socket.on('error', ({ code }: ErrorCode) => {
      openModal({
        modalName: 'ToastError',
        modalPropsData: {
          title: 'Aconteceu um problema.',
          ...codeErrorMessages[code],
        },
      })
    })
    socket.emit(field, { action: 'fetch-teams' } as IPayload)
    return () => {
      resetField()
      socket.off(field)
      socket.off('error')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
