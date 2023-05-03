import { type Id } from '@/shared/api/models'

export type SendConfirmationRes = string

export interface CreateUserDto {
  firstName: string
  surname: string
  phoneNumber: string
  email: string
}

export enum ConfirmationStatus {
  CONFIRMED = 'CONFIRMED',
  NOT_CONFIRMED = 'NOT_CONFIRMED',
  INVALID_CODE = 'INVALID_CODE',
  INVALID_SUBJECT = 'INVALID_SUBJECT',
}

export interface User {
  id: Id
  firstname: string
  surname: string
  phoneNumber: string
  email: string
}

export interface Company {
  id: Id
  title: string
}

export interface AuthUser {
  confirmationStatus: ConfirmationStatus | null
  jwtToken: string | null
  user: User | null
  company: Company | null
}
