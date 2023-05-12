import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { attachLogger } from 'effector-logger'

import { getRoutes } from '@/app/routing'

import 'normalize.css'

const router = createBrowserRouter(getRoutes())

attachLogger()

function App() {
  return <RouterProvider router={router} />
}

export default App
