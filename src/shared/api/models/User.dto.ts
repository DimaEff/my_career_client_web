import { type Id } from '@/shared/models'

export interface UserDto {
  id: Id
  firstname: string
  surname: string
  phoneNumber: string
  email: string
}
