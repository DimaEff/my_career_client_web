import { get } from 'axios'

import { type SendConfirmationRes } from '@/shared/api/auth/models'
import { getBase, withErrorHandling } from '@/shared/api/lib'
import { type ApiResponse } from '@/shared/api/models'

const BASE = getBase('auth')

const sendPhoneConfirmationCode = withErrorHandling(
  async (phoneNumber: string): Promise<ApiResponse<SendConfirmationRes>> =>
    (
      await get(BASE, {
        params: { phoneNumber },
      })
    ).data,
)
