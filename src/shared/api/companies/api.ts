import axios from 'axios'
import { createEffect } from 'effector'

import { getBase } from '@/shared/api/lib'
import {
  type ApiResponse,
  type CompanyDto,
  type CreateCompanyDto,
  type Id,
  type UserDto,
} from '@/shared/api/models'

const BASE_URL = getBase('companies')

export const getUserCompaniesFx = createEffect(
  async (userId: Id): Promise<ApiResponse<CompanyDto[]>> =>
    (await axios.get(BASE_URL, { params: { userId } })).data,
)

export const getUserCompanies = async (userId: Id): Promise<ApiResponse<CompanyDto[]>> =>
  (await axios.get(BASE_URL, { params: { userId } })).data

export const createCompanyFx = createEffect(
  async (dto: CreateCompanyDto, userId: Id): Promise<ApiResponse<CompanyDto>> =>
    (await axios.post(BASE_URL, dto, { params: { userId } })).data,
)

export const createCompany = async (
  dto: CreateCompanyDto,
  userId: Id,
): Promise<ApiResponse<CompanyDto>> =>
  (await axios.post(BASE_URL, dto, { params: { userId } })).data

export const addUserToCompanyFx = createEffect(
  async (phoneNumber: string, roleId: Id): Promise<ApiResponse<string>> =>
    (
      await axios.get(BASE_URL + 'add_user', {
        params: {
          phoneNumber,
          roleId,
        },
      })
    ).data,
)

export const getCompanyUsersFx = createEffect(
  async (): Promise<ApiResponse<UserDto[]>> => (await axios.get(BASE_URL + 'users')).data,
)
