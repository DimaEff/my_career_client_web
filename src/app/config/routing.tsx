import { type RouteObject } from 'react-router-dom'

import { Code, Home, Login, Register, RootLayout } from '@/pages'
import Companies from '@/pages/Companies.tsx'
import Redirect from '@/pages/Redirect.tsx'
import { PATHS } from '@/shared/paths.ts'

export const getRoutes = (isAuth: boolean): RouteObject[] => [
  {
    path: PATHS.HOME,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: isAuth ? <Home /> : <Redirect />,
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
        element: !isAuth ? <Register /> : <Home />,
      },
      {
        path: PATHS.COMPANIES,
        element: isAuth ? <Companies /> : <Redirect />,
      },
    ],
  },
]
