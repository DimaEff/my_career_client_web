import { makeAutoObservable } from 'mobx'

import { AuthStore } from '@/stores/authStore.ts'
import { CompaniesStore } from '@/stores/companiesStore.ts'
import { RolesStore } from '@/stores/rolesStore.ts'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class RootStore {
  public readonly authStore: AuthStore
  public readonly companiesStore: CompaniesStore
  public readonly rolesStore: RolesStore

  constructor() {
    makeAutoObservable(this)

    this.authStore = new AuthStore(this)
    this.companiesStore = new CompaniesStore(this)
    this.rolesStore = new RolesStore(this)
  }
}
