import axios from 'axios'
import { createEffect } from 'effector'

import { getAdminBase } from '@/shared/api/admin/lib'
import {
  type ApiResponse,
  type CreatePermissionDto,
  type CreateUpdateCommonRolePermissionsDto,
  type PermissionDto,
} from '@/shared/api/models'

const PERMISSIONS_BASE_URL = getAdminBase('roles/permissions')
const COMMON_ROLE_PERMISSIONS_BASE_URL = getAdminBase('roles/common_role_permissions')

export const getAllPermissionsFx = createEffect(
  async (): Promise<ApiResponse<PermissionDto[]>> => (await axios.get(PERMISSIONS_BASE_URL)).data,
)

export const createPermissionFx = createEffect(
  async (dto: CreatePermissionDto): Promise<ApiResponse<PermissionDto>> =>
    (await axios.post(PERMISSIONS_BASE_URL, dto)).data,
)

export const addCommonRolePermissionsFx = createEffect(
  async (dto: CreateUpdateCommonRolePermissionsDto): Promise<ApiResponse<string>> =>
    (await axios.post(COMMON_ROLE_PERMISSIONS_BASE_URL + 'add', dto)).data,
)

export const removeCommonRolePermissionsFx = createEffect(
  async (dto: CreateUpdateCommonRolePermissionsDto): Promise<ApiResponse<string>> =>
    (await axios.post(COMMON_ROLE_PERMISSIONS_BASE_URL + 'remove', dto)).data,
)
