import axios from 'axios'

import { getBase } from '@/shared/api/lib'
import {
  type ApiResponse,
  type CompanyDto,
  type CreateCompanyDto,
  type Id,
  type UserDto,
} from '@/shared/api/models'

const BASE_URL = getBase('companies')

export const getUserCompanies = async (userId: Id) =>
  (await axios.get<ApiResponse<CompanyDto[]>>(BASE_URL, { params: { userId } })).data

export const createCompany = async (dto: CreateCompanyDto, userId: Id) =>
  (await axios.post<ApiResponse<CompanyDto>>(BASE_URL, dto, { params: { userId } })).data

export const getCompanyUsers = async () =>
  (await axios.get<ApiResponse<UserDto[]>>(BASE_URL + '/users')).data
