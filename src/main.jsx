import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import RootLayout from './layouts/RootLayout.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/cart', element: <div>Cart Page</div>}
    ]
  },
  {
    path: 'shop',
    element: <div>Shop Page</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
