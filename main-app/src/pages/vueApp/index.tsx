import React from 'react'
import { Outlet } from 'react-router-dom'

export default function vueApp() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
