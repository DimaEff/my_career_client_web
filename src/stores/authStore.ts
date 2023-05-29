import { makeAutoObservable } from 'mobx'

import { loginByPhoneNumberFx, sendPhoneConfirmationCode } from '@/shared/api'
import { type CompanyDto, type UserDto } from '@/shared/api/models'
import { type RootStore } from '@/stores/rootStore.ts'

export class AuthStore {
  user: UserDto | null = null
  company: CompanyDto | null = null

  jwtToken: string | null = null

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this)
  }

  public readonly sendCodeToPhoneNumber = async (phoneNumber: string) => {
    await sendPhoneConfirmationCode(phoneNumber)
  }

  public readonly authByCodeAndPhoneNumber = async (phoneNumber: string, code: string) => {
    const res = await loginByPhoneNumberFx({
      phoneNumber,
      code,
    })
    if (res.payload === null) {
      // eslint-disable-next-line no-useless-return
      return
    }

    this.user = res.payload.user
    this.company = res.payload.company
    this.jwtToken = res.payload.jwtToken
  }
}
