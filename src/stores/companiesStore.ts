// eslint-disable-next-line @typescript-eslint/no-extraneous-class
import { makeAutoObservable } from 'mobx'

import { type RootStore } from '@/stores/rootStore.ts'
import { type CompanyDto, type CreateCompanyDto } from '@/shared/api/models'
import { createCompany, getUserCompanies } from '@/shared/api'

export class CompaniesStore {
  currentCompany: CompanyDto | null = null
  companies: CompanyDto[] | null = null

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
  }

  public readonly fetchCompanies = async (userId: number) => {
    const res = await getUserCompanies(userId)
    this.companies = res.payload
  }

  public readonly createCompany = async (dto: CreateCompanyDto, userId: number) => {
    await createCompany(dto, userId)
  }
}
