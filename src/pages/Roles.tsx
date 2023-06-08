import { useEffect, useMemo, useState } from 'react'
import { Fab, Stack } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { getAddedDeletedPermissions } from '@/pages/lib.ts'
import { useRootStore } from '@/stores/useRootStore.ts'
import { PermissionsList, SelectedPermissionsContext } from '@/widgets/RolePermissions'
import RolesList from '@/widgets/RolesList/ui/RolesList.tsx'

const Roles = () => {
  const {
    authStore: { company },
    rolesStore: {
      companyRoles,
      allPermissions,
      rolePermissions,
      fetchAllPermissions,
      fetchCompanyRoles,
      fetchRolePermissions,
      addPermissions,
      removePermissions,
    },
  } = useRootStore()

  useEffect(() => {
    if (company === null) {
      return
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchCompanyRoles(company.id)
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchAllPermissions()
  }, [company, fetchAllPermissions, fetchCompanyRoles])

  const [selectedRole, setSelectedRole] = useState<number | null>(null)
  const [selectedPermissions, setSelectedPermissions] = useState<number[]>([])
  useEffect(() => {
    if (selectedRole === null) {
      return
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchRolePermissions(selectedRole)
  }, [fetchRolePermissions, selectedRole])

  useEffect(() => {
    if (rolePermissions === null) {
      return
    }

    setSelectedPermissions(rolePermissions?.map((p) => p.id) ?? [])
  }, [rolePermissions])

  const handleSelect = (id: number) => {
    if (selectedPermissions.includes(id)) {
      setSelectedPermissions((ps) => ps.filter((p) => p !== id))
    } else {
      setSelectedPermissions((ps) => [...ps, id])
    }
  }

  const { added, deleted } = useMemo(
    () => getAddedDeletedPermissions(rolePermissions?.map((p) => p.id) ?? [], selectedPermissions),
    [rolePermissions, selectedPermissions],
  )

  const handleUpdate = async () => {
    if (selectedRole === null) {
      return
    }
    await addPermissions(selectedRole, added)
    await removePermissions(selectedRole, deleted)
  }

  return (
    <SelectedPermissionsContext.Provider
      value={{
        selected: selectedPermissions,
        onSelect: handleSelect,
      }}
    >
      <Stack direction={'row'} spacing={1} sx={{ width: '100%' }}>
        {companyRoles && (
          <RolesList roles={companyRoles} selected={selectedRole} setSelected={setSelectedRole} />
        )}
        {allPermissions === null || selectedRole === null || (
          <PermissionsList permissions={allPermissions} />
        )}
      </Stack>
      {(!!added.length || !!deleted.length) && (
        <>
          <Fab
            sx={{
              position: 'fixed',
              bottom: '50px',
              right: '150px',
            }}
            variant={'extended'}
            onClick={() => setSelectedPermissions(rolePermissions?.map((p) => p.id) ?? [])}
          >
            Reset
          </Fab>
          <Fab
            sx={{
              position: 'fixed',
              bottom: '50px',
              right: '50px',
            }}
            color={'primary'}
            variant={'extended'}
            onClick={handleUpdate}
          >
            Update
          </Fab>
        </>
      )}
    </SelectedPermissionsContext.Provider>
  )
}

export default observer(Roles)
