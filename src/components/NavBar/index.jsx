import React from 'react'
import clx from 'classnames'
import { Link } from '@tanstack/react-location'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

import { routeNavItems } from '../../helpers/constants'
import { useShoppingContext } from '../../providers/Shopping'

const NavItem = ({ to, navText = '', className = '' }) => {
  return (
    <li className={clx('font-light', className)}>
      <Link
        to={to}
        className={className}
        activeOptions={{ exact: true }}
      >
        {navText}
      </Link>
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
          <button disabled={!counter} className='relative rounded-md bg-white disabled:hover:bg-inherit hover:bg-black/20 p-1 text-sm -mt-1' onClick={toggleOrderList}>
            <ShoppingBagIcon className='w-5 h-5' />
            <span className='absolute -top-4 -right-1 bg-white rounded-full p-1'>{counter}</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar