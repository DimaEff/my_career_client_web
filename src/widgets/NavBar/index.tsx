import { AppBar, Box, Toolbar, Typography } from '@mui/material'

import { Logo } from '@/shared/ui/Logo'
import Navigation from '@/widgets/NavBar/ui/Navigation.tsx'
import UserInfo from '@/widgets/NavBar/ui/UserInfo.tsx'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Box display={'flex'}>
              <Typography variant='h6' component='div'>
                <Logo size={'sm'} />
              </Typography>
              <Navigation />
            </Box>
            <UserInfo />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
