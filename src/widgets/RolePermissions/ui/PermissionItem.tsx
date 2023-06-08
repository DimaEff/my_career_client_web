import { type FC, useContext } from 'react'
import { Chip } from '@mui/material'

import { type PermissionDto } from '@/shared/api/models'
import { SelectedPermissionsContext } from '@/widgets/RolePermissions/lib/context.ts'
import PermissionDescription from '@/widgets/RolePermissions/ui/PermissionDescription.tsx'

interface PermissionItemProps {
  permission: PermissionDto
}

const PermissionItem: FC<PermissionItemProps> = ({ permission }) => {
  const { selected, onSelect } = useContext(SelectedPermissionsContext)

  return (
    <Chip
      label={permission.title}
      onClick={() => onSelect(permission.id)}
      icon={<PermissionDescription description={permission.description} />}
      color={selected.includes(permission.id) ? 'primary' : 'default'}
    />
  )
}

export default PermissionItem
