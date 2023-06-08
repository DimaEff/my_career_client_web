export const getAddedDeletedPermissions = (
  rolePermissions: number[],
  selectedPermissions: number[],
) => {
  const added = selectedPermissions
    .map((sp) => !rolePermissions.includes(sp) && sp)
    .filter((a) => typeof a === 'number') as number[]
  const deleted = rolePermissions
    .map((rp) => !selectedPermissions.includes(rp) && rp)
    .filter((a) => typeof a === 'number') as number[]

  return {
    added,
    deleted,
  }
}
