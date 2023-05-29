import { makeAutoObservable } from 'mobx'

import { AuthStore } from '@/stores/authStore.ts'
import { CompaniesStore } from '@/stores/companiesStore.ts'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class RootStore {
  public readonly authStore: AuthStore
  public readonly companiesStore: CompaniesStore

  constructor() {
    makeAutoObservable(this)

    this.authStore = new AuthStore(this)
    this.companiesStore = new CompaniesStore(this)
  }
}
