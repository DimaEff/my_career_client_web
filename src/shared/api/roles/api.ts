import { get, post } from 'axios'

import { getBase, withErrorHandling } from '@/shared/api/lib'
import {
  type ApiResponse,
  type CreateRoleDto,
  type Id,
  type PermissionDto,
  type RoleDto,
  type UpdateRolePermissionsDto,
} from '@/shared/api/models'

export const BASE_URL = getBase('roles')

export const getUserRoles = withErrorHandling(
  async (): Promise<ApiResponse<RoleDto[]>> => (await get(BASE_URL)).data,
)

export const getCompanyRoles = withErrorHandling(
  async (companyId: Id): Promise<ApiResponse<RoleDto[]>> =>
    (await get(BASE_URL + `${companyId}`)).data,
)

export const createRole = withErrorHandling(
  async (dto: CreateRoleDto): Promise<ApiResponse<RoleDto>> => (await post(BASE_URL, dto)).data,
)

export const addRoleToUser = withErrorHandling(
  async (userId: Id, roleId: Id): Promise<ApiResponse<string>> =>
    (
      await get(BASE_URL + 'add_to_user', {
        params: {
          roleId,
          userId,
        },
      })
    ).data,
)

export const getRolePermissions = withErrorHandling(
  async (roleId: Id): Promise<ApiResponse<PermissionDto>> => {
    return (await get(BASE_URL + `/${roleId}/permissions`)).data
  },
)

export const addPermissionToRole = withErrorHandling(
  async (dto: UpdateRolePermissionsDto): Promise<ApiResponse<string>> => {
    return (await post(BASE_URL + 'permissions/add', dto)).data
  },
)

export const removePermissionFromRole = withErrorHandling(
  async (dto: UpdateRolePermissionsDto): Promise<ApiResponse<string>> =>
    (await post(BASE_URL + '/permissions/remove', dto)).data,
)
