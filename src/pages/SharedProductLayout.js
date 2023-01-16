import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedProductLayout = () => {
  return (
    <section className='section'>
        <h2>products shared layout</h2>
        <Outlet/>
    </section>
  )
}

export default SharedProductLayout