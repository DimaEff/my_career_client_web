import {
  addPermissionToRole,
  getAllPermissions,
  getCompanyRoles,
  getRolePermissions,
  getUserRoles,
  removePermissionFromRole,
} from '@/shared/api'
import { type PermissionDto, type RoleDto } from '@/shared/api/models'
import { type RootStore } from '@/stores/rootStore.ts'
import { makeAutoObservable } from 'mobx'

export class RolesStore {
  userRoles: RoleDto[] | null = null
  companyRoles: RoleDto[] | null = null
  rolePermissions: PermissionDto[] | null = null
  allPermissions: PermissionDto[] | null = null

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this)
  }

  public readonly fetchAllPermissions = async () => {
    const res = await getAllPermissions()
    this.allPermissions = res.payload
  }

  public readonly fetchUserRoles = async () => {
    const res = await getUserRoles()
    this.userRoles = res.payload
  }

  public readonly fetchCompanyRoles = async (companyId: number) => {
    const res = await getCompanyRoles(companyId)
    this.companyRoles = res.payload
  }

  public fetchRolePermissions = async (roleId: number) => {
    const res = await getRolePermissions(roleId)
    this.rolePermissions = res.payload
  }

  public readonly addPermissions = async (roleId: number, permissions: number[]) => {
    await addPermissionToRole({
      roleId,
      permissions,
    })
  }

  public readonly removePermissions = async (roleId: number, permissions: number[]) => {
    await removePermissionFromRole({
      roleId,
      permissions,
    })
  }
}
