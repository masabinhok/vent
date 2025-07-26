export type RequestStatus = 'pending' | 'active' | 'off'

export type MessageType = 'success' | 'error' | 'warn' | 'info'


export interface User {
  id: number
  fullName: string
  email: string
  role: 'USER' | 'ADMIN' | 'MODERATOR'
  refreshToken?: string | null
  createdAt: string // ISO date string
  updatedAt: string
}


export interface Session {
  id: number
  user1Id: number
  user2Id: number
  user1: User
  user2: User
  startedAt: string  // ISO date string
  expiresAt: string
  status: 'ACTIVE' | 'ENDED'
  friendshipStatus: 'PENDING' | 'ACCEPTED' | 'REJECTED'
  updatedAt: string
}
