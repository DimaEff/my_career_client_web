import { type FC } from 'react'
import { Card, List, ListItemButton, ListItemText } from '@mui/material'

import { type RoleDto } from '@/shared/api/models'

interface RolesListProps {
  roles: RoleDto[]
  selected: number | null
  setSelected: (id: number) => void
}

const RolesList: FC<RolesListProps> = ({ roles, setSelected, selected }) => {
  return (
    <Card
      sx={{
        width: '200px',
        maxHeight: '90vh',
        overflowY: 'auto',
      }}
    >
      <List>
        {roles.map((r) => (
          <ListItemButton key={r.id} selected={selected === r.id} onClick={() => setSelected(r.id)}>
            <ListItemText>{r.title}</ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Card>
  )
}

export default RolesList
