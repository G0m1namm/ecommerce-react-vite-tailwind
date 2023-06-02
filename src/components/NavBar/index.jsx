import React from 'react'
import { NavLink } from 'react-router-dom'
import clx from 'classnames'

import { filterNavItems, routeNavItems } from '../../helpers/constants'

const NavItem = ({ to, navText = '', className = '' }) => {
  const activeClassname = 'underline';

  return (
    <li className={clx('font-light', className)}>
      <NavLink to={to} className={({ isActive }) => isActive && activeClassname}>
        {navText}
      </NavLink>
    </li>
  )
}

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center fixed top-0 w-full z-10 py-5 px-8'>
      <ul className='inline-flex gap-3'>
        <NavItem to='/' navText='Shopi' className='font-bold' />
        {filterNavItems.map((filterItem) => <NavItem key={`filter-item-${filterItem.to}`} {...filterItem} />)}
      </ul>
      <ul className='inline-flex gap-3'>
        {routeNavItems.map((filterItem) => <NavItem key={`nav-item-${filterItem.to}`} {...filterItem} />)}
      </ul>
    </nav>
  )
}

export default NavBar