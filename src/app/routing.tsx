import { type RouteObject } from 'react-router-dom'

import { Home, Login, Register } from '@/pages'
import { PATHS } from '@/shared/paths'

export const getRoutes = (): RouteObject[] => [
  {
    path: PATHS.HOME,
    element: <Home />,
  },
  {
    path: PATHS.LOGIN,
    element: <Login />,
  },
  {
    path: PATHS.REGISTER,
    element: <Register />,
  },
]
