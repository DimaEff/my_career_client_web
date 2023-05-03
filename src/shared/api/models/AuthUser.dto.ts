import { type CompanyDto } from '@/shared/api/models/Company.dto'
import { type ConfirmationStatus } from '@/shared/api/models/ConfirmationStatus'
import { type UserDto } from '@/shared/api/models/User.dto'

export interface AuthUserDto {
  confirmationStatus: ConfirmationStatus | null
  jwtToken: string | null
  user: UserDto | null
  company: CompanyDto | null
}
