import { type RouteObject } from 'react-router-dom'

import { Code, Home, Login, Register } from '@/pages'
import { PATHS } from '@/shared/paths'
import { RootLayout } from '../pages/RootLayout'

export const getRoutes = (): RouteObject[] => [
  {
    path: PATHS.HOME,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATHS.LOGIN.INDEX,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: PATHS.LOGIN.CODE(),
            element: <Code />,
          },
        ],
      },
      {
        path: PATHS.REGISTER,
        element: <Register />,
      },
    ],
  },
]
