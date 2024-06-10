import { JWT } from "next-auth/jwt"

export interface IUser {
  role: 'library' | 'user'
  username: string
}
export interface LoginData {
  role: 'library' | 'user'
  username: string
  accessToken: JWT,
  refreshToken: JWT
  expiresIn: number
}