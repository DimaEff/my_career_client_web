import { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { attachLogger } from 'effector-logger' // some error with importing from

import { getRoutes } from '@/app/config/routing.tsx'
import { theme } from '@/app/config/theme.ts'

import 'normalize.css'

attachLogger()

const App = () => {
  const router = createBrowserRouter(getRoutes())

  return (
    <Suspense fallback={'loading...'}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Suspense>
  )
}

export default App
