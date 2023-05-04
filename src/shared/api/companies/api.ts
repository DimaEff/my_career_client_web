import { get, post } from 'axios'

import { getBase, withErrorHandling } from '@/shared/api/lib'
import {
  type ApiResponse,
  type CompanyDto,
  type CreateCompanyDto,
  type Id,
  type UserDto,
} from '@/shared/api/models'

const BASE_URL = getBase('companies')

export const getUserCompanies = withErrorHandling(
  async (userId: Id): Promise<ApiResponse<CompanyDto[]>> =>
    (await get(BASE_URL, { params: { userId } })).data,
)

export const createCompany = withErrorHandling(
  async (dto: CreateCompanyDto, userId: Id): Promise<ApiResponse<CompanyDto>> =>
    (await post(BASE_URL, dto, { params: { userId } })).data,
)

export const addUserToCompany = withErrorHandling(
  async (phoneNumber: string, roleId: Id): Promise<ApiResponse<string>> =>
    (
      await get(BASE_URL + 'add_user', {
        params: {
          phoneNumber,
          roleId,
        },
      })
    ).data,
)

export const getCompanyUsers = withErrorHandling(
  async (): Promise<ApiResponse<UserDto[]>> => (await get(BASE_URL + 'users')).data,
)
