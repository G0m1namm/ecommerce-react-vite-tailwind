import React from 'react'
import { NavLink } from 'react-router-dom'
import clx from 'classnames'

import { filterNavItems, routeNavItems } from '../../helpers/constants'
import { useShoppingContext } from '../../providers/Shopping'

const NavItem = ({ to, navText = '', className = '' }) => {
  const activeClassname = 'underline'

  return (
    <li className={clx('font-light', className)}>
      <NavLink to={to} className={({ isActive }) => isActive ? activeClassname : undefined}>
        {navText}
      </NavLink>
    </li>
  )
}

const NavBar = () => {
  const { counter, toggleOrderList } = useShoppingContext()

  return (
    <nav className='flex justify-between items-center fixed top-0 w-full z-10 py-5 px-8'>
      <ul className='inline-flex gap-3'>
        <NavItem to='/' navText='Shopi' className='font-medium text-2xl' />
      </ul>
      <ul className='inline-flex gap-3'>
        {routeNavItems.map((filterItem) => <NavItem key={`nav-item-${filterItem.to}`} {...filterItem} />)}
        <li className='inline-flex gap-3'>
          <button className='rounded-md bg-white hover:bg-black/20 p-1 text-sm -mt-1' onClick={toggleOrderList}>
            🛒 {counter}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar