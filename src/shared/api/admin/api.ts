import { get, post } from 'axios'

import { getAdminBase } from '@/shared/api/admin/lib'
import { withErrorHandling } from '@/shared/api/lib'
import {
  type ApiResponse,
  type CreatePermissionDto,
  type CreateUpdateCommonRolePermissionsDto,
  type PermissionDto,
} from '@/shared/api/models'

const PERMISSIONS_BASE_URL = getAdminBase('roles/permissions')
const COMMON_ROLE_PERMISSIONS_BASE_URL = getAdminBase('roles/common_role_permissions')

export const getAllPermissions = withErrorHandling(
  async (): Promise<ApiResponse<PermissionDto[]>> => (await get(PERMISSIONS_BASE_URL)).data,
)

export const createPermission = withErrorHandling(
  async (dto: CreatePermissionDto): Promise<ApiResponse<PermissionDto>> =>
    (await post(PERMISSIONS_BASE_URL, dto)).data,
)

export const addCommonRolePermissions = withErrorHandling(
  async (dto: CreateUpdateCommonRolePermissionsDto): Promise<ApiResponse<string>> =>
    (await post(COMMON_ROLE_PERMISSIONS_BASE_URL + 'add', dto)).data,
)

export const removeCommonRolePermissions = withErrorHandling(
  async (dto: CreateUpdateCommonRolePermissionsDto): Promise<ApiResponse<string>> =>
    (await post(COMMON_ROLE_PERMISSIONS_BASE_URL + 'remove', dto)).data,
)
