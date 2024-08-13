


import { Route, Routes } from 'react-router-dom'
import './App.css'

import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import CourseDescription from './Pages/Course/CourseDescription'
import CourseList from './Pages/Course/CourseList'
import Denied from './Pages/DeniedPage'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Signup from './Pages/SignUp'



function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element = { <HomePage /> }></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/courses' element={<CourseList />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/denied' element={<Denied/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/course/description' element={<CourseDescription/>}></Route>

        <Route path='*' element={<NotFound/>}></Route>
      </Routes> 
    </>
  )
}

export default App
