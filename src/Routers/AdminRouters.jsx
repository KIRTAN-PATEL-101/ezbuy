import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Admin from '../Admin/Admin'


const AdminRouters = () => {
  return (
   <>
   <div>
      <h1>Admin</h1>
   </div>
    <div>
      <Routes>
         <Route path='/admin' element={<Admin />}></Route>
      </Routes>
    </div>
    </>
  )
}

export default AdminRouters
