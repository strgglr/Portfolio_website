import React from 'react'
import Hire from "./components/Hire";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Topbar from './components/Topbar';
import Error from './components/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element : <Topbar />,
    errorElement: <Error />
  },
  {
    path: "/hire",
    element : <Hire />,
    errorElement: <Error />
  }
])
function App() {
  return (
    <>
      <React.StrictMode>
      <div className='app-container'>
        <RouterProvider router={router} />
      </div>
      </React.StrictMode>
    </>
  )
}

export default App;