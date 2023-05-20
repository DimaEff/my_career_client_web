import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { attachLogger } from 'effector-logger' // some error with importing from

import { getRoutes } from '@/app/routing'

import 'normalize.css'

const router = createBrowserRouter(getRoutes())

attachLogger()

function App() {
  return (
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  )
}

export default App
