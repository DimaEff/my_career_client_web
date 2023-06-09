import { type RouteObject } from 'react-router-dom'

import { Code, Home, Login, Register, RootLayout } from '@/pages'
import Companies from '@/pages/Companies.tsx'
import Redirect from '@/pages/Redirect.tsx'
import Roles from '@/pages/Roles.tsx'
import { PATHS } from '@/shared/paths.ts'

export const getRoutes = (isAuth: boolean, isAuthIntoCompany: boolean): RouteObject[] => [
  {
    path: PATHS.HOME,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: isAuth ? <Home /> : <Redirect />,
      },
      {
        path: PATHS.LOGIN,
        element: !isAuth ? <Login /> : <Redirect to={PATHS.HOME} />,
      },
      {
        path: PATHS.REGISTER,
        element: !isAuth ? <Register /> : <Redirect to={PATHS.HOME} />,
      },
      {
        path: PATHS.CONFIRMATION_CODE(),
        element: !isAuth ? <Code /> : <Redirect to={PATHS.HOME} />,
      },
      {
        path: PATHS.COMPANIES,
        element: isAuth ? (
          isAuthIntoCompany ? (
            <Redirect to={PATHS.HOME} />
          ) : (
            <Companies />
          )
        ) : (
          <Redirect />
        ),
      },
      {
        path: PATHS.ROLES,
        element: isAuth ? <Roles /> : <Redirect />,
      },
    ],
  },
]
