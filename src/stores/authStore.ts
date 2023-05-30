import axios from 'axios'
import { makeAutoObservable } from 'mobx'

import {
  authByJwt,
  loginByPhoneNumberFx,
  loginIntoCompany,
  sendPhoneConfirmationCode,
} from '@/shared/api'
import { type CompanyDto, type UserDto } from '@/shared/api/models'
import { type RootStore } from '@/stores/rootStore.ts'

export class AuthStore {
  private readonly JWT_TOKEN_PROP_NAME = 'jwtToken'

  user: UserDto | null = null
  company: CompanyDto | null = null

  jwtToken: string | null = null

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this)
  }

  public readonly initUser = async () => {
    const jwt = this.getJwtToken()

    if (jwt === null) {
      return
    }

    const res = await authByJwt(jwt)
    this.user = res.payload.user
    this.company = res.payload.company
    this.jwtToken = res.payload.jwtToken
    this.setJwtTokenToLocalStorage(res.payload.jwtToken)
    this.setDefaultBearerToken(res.payload.jwtToken)
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

    this.user = res.payload.user
    this.company = res.payload.company
    this.jwtToken = res.payload.jwtToken
    this.setJwtTokenToLocalStorage(res.payload.jwtToken)
    this.setDefaultBearerToken(res.payload.jwtToken as string)
  }

  public readonly logout = () => {
    this.user = null
    this.company = null
    this.jwtToken = null
    this.setJwtTokenToLocalStorage(null)
  }

  private readonly setDefaultBearerToken = (jwtToken: string) => {
    // eslint-disable-next-line prettier/prettier
    axios.defaults.headers.common = { 'Authorization': `Bearer ${jwtToken}`
  }
  }

  private readonly getJwtToken = () => window.localStorage.getItem(this.JWT_TOKEN_PROP_NAME)

  private readonly setJwtTokenToLocalStorage = (jwtToken: string | null) => {
    if (jwtToken === null) {
      window.localStorage.removeItem(this.JWT_TOKEN_PROP_NAME)
      return
    }

    window.localStorage.setItem(this.JWT_TOKEN_PROP_NAME, jwtToken)
  }
}
