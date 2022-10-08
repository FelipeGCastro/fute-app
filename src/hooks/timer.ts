import { differenceInSeconds } from 'date-fns'
import { useEffect, useState } from 'react'
import { useFieldContext } from '/contexts/field'
import { socket } from '/services/io'

export const useTimer = (fieldType: IFieldsType) => {
  const { myDeviceId, field } = useFieldContext()
  const [loading, setLoading] = useState(false)
  const [time, setTime] = useState(0)
  const [paused, setPaused] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timer
    if (field.status === 'played') {
      const timeToPlay = differenceInSeconds(new Date(), new Date(field.timer))
      setTime(timeToPlay)
      interval = setInterval(() => {
        setTime(prev => prev + 1)
      }, 1000)
      setPaused(false)
    } else if (field.status === 'initial') {
      //@ts-ignore
      if (interval) {
        clearInterval(interval)
      }
      setTime(0)
      setPaused(true)
    } else if (field.status === 'paused') {
      //@ts-ignore
      if (interval) {
        clearInterval(interval)
      }
      const timePaused = differenceInSeconds(
        new Date(field.pausedAt),
        new Date(field.timer),
      )
      setTime(timePaused)
      setPaused(true)
    }
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [field])

  const pause = () => {
    setLoading(true)
    socket.emit(
      fieldType,
      { action: 'timer-pause', deviceId: myDeviceId } as IPayload,
      () => setLoading(false),
    )
  }
  const play = () => {
    setLoading(true)
    socket.emit(
      fieldType,
      { action: 'timer-play', deviceId: myDeviceId } as IPayload,
      () => setLoading(false),
    )
  }
  const reset = () => {
    setLoading(true)
    socket.emit(
      fieldType,
      { action: 'timer-reset', deviceId: myDeviceId } as IPayload,
      () => setLoading(false),
    )
  }

  return {
    paused,
    pause,
    play,
    reset,
    loading,
    time,
  }
}
