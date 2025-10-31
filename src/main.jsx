import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import RootLayout from './layouts/RootLayout.jsx'
import ShopPage from './pages/ShopPage.jsx'
import CartPage from './pages/CartPage.jsx'
import { CartItemsProvider } from './providers/CartItemsProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/cart', element: <CartPage /> },
    ]
  },
  {
    path: 'shop',
    element: <div>Shop Page</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartItemsProvider>
      <RouterProvider router={router} />
    </CartItemsProvider>
  </StrictMode>,
)
