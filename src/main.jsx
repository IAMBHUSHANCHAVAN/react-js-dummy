import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dummy from './components/Dummy.jsx'
import Users from './components/Users.jsx'


const router = createBrowserRouter([{
  path:"/",
  element:<App/>
},
{
  path:"/product/:id",
  element:<Users/>
},


{
  path:"*",
  element:<div>page not found</div>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
