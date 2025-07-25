import { MessageType } from "@shared/types"

export interface User {
  fullName: string, 
  email: string, 
}

export interface LoginInput {
  email: string,
  password: string
}

export interface RegisterInput extends LoginInput {
  fullName: string
}

export interface Message {
  content: string
  type: MessageType
}