import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AdminNav from './components/AdminNav'
import Footer from './components/Footer'
import Assessment from './pages/Assessment'
import AssessmentReport from './pages/AssessmentReport'
import React from 'react'
import AdminList from './pages/AdminList'
import WorkStyleGraph from './pages/WorkStyleGraph'


const Client = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}


const Admin = () => {
  return (
    <React.Fragment>
    <AdminNav />
      <Outlet />
    </React.Fragment>
  )
}


function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Client />}>
          <Route index element={<Assessment />} />
          <Route path='/report' element={<AssessmentReport />} />
        </Route>
       <Route path='/' element={<Admin />}>
          <Route path='/admin-list' element={<AdminList />} />
          <Route path='/work-styles/:id' element={<WorkStyleGraph />} />
       </Route>
      </Routes>
    </>
  )
}

export default App
