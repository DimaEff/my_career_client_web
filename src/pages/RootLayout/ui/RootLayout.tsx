import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

import { useShouldHideNavigationBar } from '@/pages/RootLayout/lib/useShouldHideNavigationBar.ts'
import NavBar from '@/widgets/NavBar'

const RootLayout = () => {
  const shouldHideNavigationBar = useShouldHideNavigationBar()

  return (
    <>
      {shouldHideNavigationBar || <NavBar />}
      <Container maxWidth={'lg'} sx={{ mt: 2 }}>
        <Outlet />
      </Container>
    </>
  )
}

export default RootLayout
