import { io } from 'socket.io-client'

const base = process.env.BASE_URL
// const base = 'http://locolhost:8000'
// const base = 'http://192.168.1.85:8000'

export const socket = io(base as string)

socket.on('connect', () => {
  console.log('SOCKET CONNECT')
})
socket.on('disconnect', () => {
  console.log('DISCONNECT')
})
