import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header: FC = (): JSX.Element => {
  return (
    <header className="bg-amber-50 rounded-b">
      <div className="ml-9">
        <nav>
          <NavLink className="hover:text-violet-300" to="/">
            Home
          </NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/addNews">Add News</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
