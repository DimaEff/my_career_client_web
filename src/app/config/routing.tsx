import { type RouteObject } from 'react-router-dom'

import { Code, Home, Login, Register, RootLayout } from '@/pages'
import Companies from '@/pages/Companies.tsx'
import { PATHS } from '@/shared/paths.ts'

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
      {
        path: PATHS.COMPANIES,
        element: <Companies />,
      },
    ],
  },
]
