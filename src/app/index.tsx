import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { getRoutes } from '@/app/routing'

import './index.css'

const router = createBrowserRouter(getRoutes())

function App() {
  return <RouterProvider router={router} />
}

export default App
