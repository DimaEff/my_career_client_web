import { type Id } from '@/shared/api/models/additionalTypes'

export interface CreateUpdateCommonRolePermissionsDto {
  commonRoleTitle: string
  permissions: Id[]
}
