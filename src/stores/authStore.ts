import { makeAutoObservable } from 'mobx'

import { loginByPhoneNumberFx, loginIntoCompany, sendPhoneConfirmationCode } from '@/shared/api'
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

  public readonly loginByCodeAndPhoneNumber = async (phoneNumber: string, code: string) => {
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

  public readonly loginUserIntoCompany = async (companyId: number, userId: number) => {
    const res = await loginIntoCompany(userId, companyId)

    if (res.payload === null) {
      return
    }

    this.company = res.payload.company
    this.jwtToken = res.payload.jwtToken
    this.setJwtTokenToLocalStorage(res.payload.jwtToken)
  }

  public readonly logout = () => {
    this.user = null
    this.company = null
    this.jwtToken = null
    this.setJwtTokenToLocalStorage(null)
  }

  private readonly setJwtTokenToLocalStorage = (jwtToken: string | null) => {
    const jwtTokenPropName = 'jwtToken'

    if (jwtToken === null) {
      window.localStorage.removeItem(jwtTokenPropName)
      return
    }

    window.localStorage.setItem(jwtTokenPropName, jwtToken)
  }
}
