import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div>
        <div className="flex mt-16">
         <Sidebar/>
         {/* video render here  */}
          <Feed/>
          <Outlet/>
          {}
      </div>
    </div>
  )
}

export default Body