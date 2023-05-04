import { type Id } from '@/shared/api/models/additionalTypes'

export interface UpdateRolePermissionsDto {
  roleId: Id
  permissions: Id[]
}
