import { makeAutoObservable } from 'mobx'

import { createCompany, getCompanyUsers, getUserCompanies } from '@/shared/api'
import { type CompanyDto, type CreateCompanyDto, type UserDto } from '@/shared/api/models'
import { type RootStore } from '@/stores/rootStore.ts'

export class CompaniesStore {
  currentCompany: CompanyDto | null = null
  companies: CompanyDto[] | null = null

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this)
  }

  public readonly fetchCompanies = async (userId: number) => {
    const res = await getUserCompanies(userId)
    this.companies = res.payload
  }

  public readonly createCompany = async (dto: CreateCompanyDto, userId: number) => {
    await createCompany(dto, userId)
  }

  public readonly fetchCompanyUsers = async (): Promise<UserDto[] | null> => {
    return (await getCompanyUsers()).payload
  }
}
