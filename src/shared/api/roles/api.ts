import { get, post } from 'axios'
import { createEffect } from 'effector'

import { getBase } from '@/shared/api/lib'
import {
  type ApiResponse,
  type CreateRoleDto,
  type Id,
  type PermissionDto,
  type RoleDto,
  type UpdateRolePermissionsDto,
} from '@/shared/api/models'

export const BASE_URL = getBase('roles')

export const getUserRolesFx = createEffect(
  async (): Promise<ApiResponse<RoleDto[]>> => (await get(BASE_URL)).data,
)

export const getCompanyRolesFx = createEffect(
  async (companyId: Id): Promise<ApiResponse<RoleDto[]>> =>
    (await get(BASE_URL + `${companyId}`)).data,
)

export const createRoleFx = createEffect(
  async (dto: CreateRoleDto): Promise<ApiResponse<RoleDto>> => (await post(BASE_URL, dto)).data,
)

export const addRoleToUserFx = createEffect(
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

export const getRolePermissionsFx = createEffect(
  async (roleId: Id): Promise<ApiResponse<PermissionDto>> => {
    return (await get(BASE_URL + `/${roleId}/permissions`)).data
  },
)

export const addPermissionToRoleFx = createEffect(
  async (dto: UpdateRolePermissionsDto): Promise<ApiResponse<string>> => {
    return (await post(BASE_URL + 'permissions/add', dto)).data
  },
)

export const removePermissionFromRoleFx = createEffect(
  async (dto: UpdateRolePermissionsDto): Promise<ApiResponse<string>> =>
    (await post(BASE_URL + '/permissions/remove', dto)).data,
)
