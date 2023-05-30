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
            element: !isAuth ? <Login /> : <Redirect to={PATHS.HOME} />,
          },
          {
            path: PATHS.LOGIN.CODE(),
            element: !isAuth ? <Code /> : <Redirect to={PATHS.HOME} />,
          },
        ],
      },
      {
        path: PATHS.REGISTER,
        element: !isAuth ? <Register /> : <Redirect to={PATHS.HOME} />,
      },
      {
        path: PATHS.COMPANIES,
        element: isAuth ? <Companies /> : <Redirect />,
      },
    ],
  },
]
