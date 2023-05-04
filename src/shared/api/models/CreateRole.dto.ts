export interface CreateRoleDto {
  title: string
  description: string
  permissions: number[]
  commonRoleTitle: string | null
}
