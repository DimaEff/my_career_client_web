import { AppBar, Box, Toolbar, Typography } from '@mui/material'

import { Logo } from '@/shared/ui/Logo'
import AuthButtons from '@/widgets/NavBar/ui/AuthButtons.tsx'
import Navigation from '@/widgets/NavBar/ui/Navigation.tsx'

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
            <AuthButtons />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
