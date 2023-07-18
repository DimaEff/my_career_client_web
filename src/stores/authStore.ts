import axios from 'axios'
import { makeAutoObservable } from 'mobx'

import {
  authByJwt,
  checkPhoneNumber,
  loginByPhoneNumberFx,
  loginIntoCompany,
  register,
  sendPhoneConfirmationCode,
} from '@/shared/api'
import {
  type AuthUserDto,
  type CompanyDto,
  ConfirmationStatus,
  type CreateUserDto,
  type UserDto,
} from '@/shared/api/models'
import { type RootStore } from '@/stores/rootStore.ts'

export class AuthStore {
  private readonly JWT_TOKEN_PROP_NAME = 'jwtToken'

  user: UserDto | null = null
  company: CompanyDto | null = null

  jwtToken: string | null = null

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
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

  private readonly setAuth = (dto: AuthUserDto) => {
    this.user = dto.user
    this.company = dto.company
    this.jwtToken = dto.jwtToken
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

    this.setAuth(res.payload)
  }

  public readonly loginUserIntoCompany = async (companyId: number, userId: number) => {
    const res = await loginIntoCompany(userId, companyId)

    if (res.payload === null) {
      return
    }

    this.setAuth(res.payload)
    this.setJwtTokenToLocalStorage(res.payload.jwtToken)
    this.setDefaultBearerToken(res.payload.jwtToken as string)
  }

  public readonly checkPhoneNumber = async (
    phoneNumber: string,
    code: string,
  ): Promise<boolean> => {
    const res = await checkPhoneNumber(phoneNumber, code)
    if (res.payload === null) {
      return false
    }

    return res.payload === ConfirmationStatus.CONFIRMED
  }

  public readonly registerUser = async (dto: CreateUserDto) => {
    const res = await register(dto)
    if (res.payload === null) {
      // eslint-disable-next-line no-useless-return
      return
    }

    this.setAuth(res.payload)
  }

  public readonly logout = () => {
    this.setAuth({
      user: null,
      jwtToken: null,
      company: null,
      confirmationStatus: ConfirmationStatus.NOT_CONFIRMED,
    })
    this.setJwtTokenToLocalStorage(null)
  }

  private readonly setDefaultBearerToken = (jwtToken: string) => {
    // eslint-disable-next-line prettier/prettier
    axios.defaults.headers.common = {
      Authorization: `Bearer ${jwtToken}`,
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
