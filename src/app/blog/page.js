import React from 'react'
import Sidebar from './sideBar'

const page = () => {
  return (
    <div className="flex flex-col md:flex-row">
  {/* Main Content */}
  <main className="w-full md:w-3/4 px-4 py-6">
    {/* Blog content goes here */}
  </main>

  {/* Sidebar */}
  <Sidebar />
</div>
  )
}

export default page

