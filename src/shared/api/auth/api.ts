import axios from 'axios'
import { createEffect } from 'effector'

import { type PhoneNumberCode } from '@/shared/api/auth/models'
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
      await axios.get(AUTH_BASE + '/send_phone_confirmation', {
        params: { phoneNumber },
      })
    ).data,
)

export const sendPhoneConfirmationCode = async (
  phoneNumber: string,
): Promise<ApiResponse<SendConfirmationDto>> =>
  (
    await axios.get(AUTH_BASE + '/send_phone_confirmation', {
      params: { phoneNumber },
    })
  ).data

// export const loginByPhoneNumberFx = createEffect(
//   async ({ phoneNumber, code }: PhoneNumberCode) =>
//     (
//       await axios.get<ApiResponse<AuthUserDto>>(LOGIN_BASE, {
//         params: {
//           phoneNumber,
//           code,
//         },
//       })
//     ).data,
// )

export const loginByPhoneNumberFx = async ({ phoneNumber, code }: PhoneNumberCode) =>
  (
    await axios.get<ApiResponse<AuthUserDto>>(LOGIN_BASE, {
      params: {
        phoneNumber,
        code,
      },
    })
  ).data

export const loginIntoCompanyFx = createEffect(
  async (userId: string, companyId: string): Promise<ApiResponse<AuthUserDto>> =>
    (await axios.get(LOGIN_BASE + `/company/${companyId}`, { params: { userId } })).data,
)

export const loginIntoCompany = async (
  userId: number,
  companyId: number,
): Promise<ApiResponse<AuthUserDto>> =>
  (await axios.get(LOGIN_BASE + `/company/${companyId}`, { params: { userId } })).data

export const checkPhoneNumberFx = createEffect(
  async (phoneNumber: string, code: string): Promise<ApiResponse<ConfirmationStatus>> =>
    (
      await axios.get(REGISTER_BASE + '/check_phone_number', {
        params: {
          phoneNumber,
          code,
        },
      })
    ).data,
)

export const registerFx = createEffect(
  async (dto: CreateUserDto): Promise<ApiResponse<AuthUserDto>> =>
    (await axios.post(REGISTER_BASE, dto)).data,
)
