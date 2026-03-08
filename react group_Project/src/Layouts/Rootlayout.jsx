import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Rootlayout() {
  return (
    <div className=''>
      <Link to="/">Top</Link> |
      <Link to="/news">News</Link> |
      <Link to="/episode">Episode</Link> |
      <Link to="/introduction">Introduction</Link> |
      <Link to="/movie">Movie</Link>

      <Outlet />
    </div>
  )
}

export default Rootlayout