import { type FC } from 'react'
import { Card, CardContent, Stack } from '@mui/material'

import { type PermissionDto } from '@/shared/api/models'
import PermissionItem from '@/widgets/RolePermissions/ui/PermissionItem.tsx'

interface PermissionsListProps {
  permissions: PermissionDto[]
}

const PermissionsList: FC<PermissionsListProps> = ({ permissions }) => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Stack direction={'row'} spacing={1}>
          {permissions.map((p) => (
            <PermissionItem key={p.id} permission={p} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  )
}

export default PermissionsList
