import { useRef, useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import { Avatar, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { useRootStore } from '@/stores/useRootStore.ts'

const UserInfo = () => {
  const {
    authStore: { user, company, logout },
  } = useRootStore()

  const anchElement = useRef(null)
  const [open, setOpen] = useState(false)

  return (
    <Stack direction={'row'} spacing={1}>
      <IconButton
        id={'avatar'}
        ref={anchElement}
        aria-controls={open ? 'user-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={() => setOpen(true)}
      >
        <Avatar alt={user?.firstname} />
      </IconButton>
      <Menu
        id={'user-menu'}
        MenuListProps={{ 'aria-labelledby': 'avatar' }}
        anchorEl={anchElement.current}
        open={open}
        onClose={() => setOpen(false)}
      >
        <MenuItem disabled>
          <Stack spacing={1}>
            <Typography>
              {user?.firstname} {user?.surname}
            </Typography>
            {company && <Typography>Company: {company?.title}</Typography>}
          </Stack>
        </MenuItem>
        <MenuItem onClick={logout}>
          <LogoutIcon />
        </MenuItem>
      </Menu>
    </Stack>
  )
}

export default observer(UserInfo)
