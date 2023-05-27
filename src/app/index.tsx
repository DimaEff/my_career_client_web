import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { attachLogger } from 'effector-logger' // some error with importing from

import { getRoutes } from '@/app/routing'
import { theme } from '@/app/theme.ts'

import 'normalize.css'

attachLogger()

const App = () => {
  const router = createBrowserRouter(getRoutes())

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
