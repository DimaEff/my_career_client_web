import { get, post } from 'axios'
import { createEffect } from 'effector'

import { getBase } from '@/shared/api/lib'
import {
  type ApiResponse,
  type AuthUserDto,
  type ConfirmationStatus,
  type CreateUserDto,
  type SendConfirmationDto,
} from '@/shared/api/models'

const AUTH_BASE = getBase('auth')
const LOGIN_BASE = getBase('login')
const REGISTER_BASE = getBase('register')

export const sendPhoneConfirmationCodeFx = createEffect(
  async (phoneNumber: string): Promise<ApiResponse<SendConfirmationDto>> =>
    (
      await get(AUTH_BASE, {
        params: { phoneNumber },
      })
    ).data,
)

export const loginByPhoneNumberFx = createEffect(
  async (phoneNumber: string, code: string): Promise<ApiResponse<AuthUserDto>> =>
    (
      await get(LOGIN_BASE, {
        params: {
          phoneNumber,
          code,
        },
      })
    ).data,
)

export const loginIntoCompanyFx = createEffect(
  async (userId: string, companyId: string): Promise<ApiResponse<AuthUserDto>> =>
    (await get(LOGIN_BASE + `company/${companyId}`, { params: { userId } })).data,
)

export const checkPhoneNumberFx = createEffect(
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

export const registerFx = createEffect(
  async (dto: CreateUserDto): Promise<ApiResponse<AuthUserDto>> =>
    (await post(REGISTER_BASE, dto)).data,
)
