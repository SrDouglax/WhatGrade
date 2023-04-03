import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import App from './pages/App/App'
import List from './pages/List/List'

const router = createBrowserRouter([
  {
    path: '/',
    element: (<List></List>)
  },
  {
    path: '/:period',
    element: (<App></App>)
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
