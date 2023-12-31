import { Suspense, useEffect, useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { attachLogger } from 'effector-logger' // some error with importing from
import { observer } from 'mobx-react-lite'

import { getRoutes } from '@/app/config/routing.tsx'
import { theme } from '@/app/config/theme.ts'
import { useRootStore } from '@/stores/useRootStore.ts'

import 'normalize.css'

attachLogger()

const App = () => {
  const {
    authStore: { user, initUser, company },
  } = useRootStore()

  const routes = useMemo(() => getRoutes(user !== null, company !== null), [company, user])
  const router = createBrowserRouter(routes)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    initUser()
  }, [initUser])

  return (
    <Suspense fallback={'loading...'}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Suspense>
  )
}

export default observer(App)
