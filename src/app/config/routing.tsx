import { type RouteObject } from 'react-router-dom'

import { Code, Companies, Home, Login, Redirect, Register, RegisterForm, Roles } from '@/pages'
import { RootLayout } from '@/pages/RootLayout'
import { PATHS } from '@/shared/paths.ts'

const IS_AUTH_PATH = PATHS.HOME

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
        element: !isAuth ? <Login /> : <Redirect to={IS_AUTH_PATH} />,
      },
      {
        path: '/register',
        children: [
          {
            index: true,
            element: !isAuth ? <Register /> : <Redirect to={IS_AUTH_PATH} />,
          },
          {
            path: PATHS.REGISTER.FORM(),
            element: !isAuth ? <RegisterForm /> : <Redirect to={IS_AUTH_PATH} />,
          },
        ],
      },
      {
        path: PATHS.CONFIRMATION_CODE(),
        element: !isAuth ? <Code /> : <Redirect to={IS_AUTH_PATH} />,
      },
      {
        path: PATHS.COMPANIES,
        element: isAuth ? (
          isAuthIntoCompany ? (
            <Redirect to={IS_AUTH_PATH} />
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
