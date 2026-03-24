import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between max-w-7xl mx-auto'>
        <p>
            <Link to={'/'} className='font-bold'>App Store</Link>
        </p>
        <ul className='flex items-center justify-center gap-5'>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/apps'}>Apps</Link>
            </li>
            <li>
                <Link to={'/installation'}>Installation</Link>
            </li>
        </ul>
        <div className='flex items-center justify-center gap-4'>
            {/* <p>
                <Link to={'/'}>Home</Link>
            </p> */}
            <p>
                <Link to={'/contribute'}>Contribute</Link>
            </p>
        </div>
    </div>
  )
}

export default Navbar