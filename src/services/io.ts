import { io } from 'socket.io-client'

const base = process.env.BASE_URL

export const socket = io(base as string)

socket.on('connect', () => {
  console.log('SOCKET CONNECT')
})
socket.on('disconnect', () => {
  console.log('DISCONNECT')
})
