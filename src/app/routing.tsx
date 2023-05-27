import { type RouteObject } from 'react-router-dom'

import { Code, Home, Login, Register, RootLayout } from '@/pages'
import { PATHS } from '@/shared/paths'

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
