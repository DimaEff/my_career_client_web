import { type Id } from '@/shared/api/models/additionalTypes'
import { type CommonRoleTitle } from '@/shared/api/models/CommonRoleTitle'

export interface RoleDto {
  valid: Id
  title: string
  description: string
  commonRoleTitle: CommonRoleTitle
}
