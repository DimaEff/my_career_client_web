import { get, post } from 'axios'

import {
  type AuthUser,
  type ConfirmationStatus,
  type CreateUserDto,
  type SendConfirmationRes,
} from '@/shared/api/auth/models'
import { getBase, withErrorHandling } from '@/shared/api/lib'
import { type ApiResponse } from '@/shared/api/models'

const AUTH_BASE = getBase('auth')
const LOGIN_BASE = getBase('login')
const REGISTER_BASE = getBase('register')

export const sendPhoneConfirmationCode = withErrorHandling(
  async (phoneNumber: string): Promise<ApiResponse<SendConfirmationRes>> =>
    (
      await get(AUTH_BASE, {
        params: { phoneNumber },
      })
    ).data,
)

export const loginByPhoneNumber = withErrorHandling(
  async (phoneNumber: string, code: string): Promise<ApiResponse<AuthUser>> =>
    (
      await get(LOGIN_BASE, {
        params: {
          phoneNumber,
          code,
        },
      })
    ).data,
)

export const loginIntoCompany = withErrorHandling(
  async (userId: string, companyId: string): Promise<ApiResponse<AuthUser>> =>
    (await get(LOGIN_BASE + `company/${companyId}`, { params: { userId } })).data,
)

export const checkPhoneNumber = withErrorHandling(
  async (phoneNumber: string, code: string): Promise<ApiResponse<ConfirmationStatus>> =>
    (
      await get(REGISTER_BASE + 'check_phone_number', {
        params: {
          phoneNumber,
          code,
        },
      })
    ).data,
)

export const register = withErrorHandling(
  async (dto: CreateUserDto): Promise<ApiResponse<AuthUser>> =>
    (await post(REGISTER_BASE, dto)).data,
)
