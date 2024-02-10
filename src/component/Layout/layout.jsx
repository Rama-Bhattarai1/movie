import React from 'react'
import Footersecond from './footersecond'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
const layout = () => {
  
  return (
    <div>
       <>
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    <Footersecond/>
    </>
    </div>
  )
}

export default layout

