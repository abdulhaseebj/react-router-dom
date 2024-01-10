import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav>
        <ul className='flex justify-evenly mt-4 '>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
            <Link to={'product/jjjjsjss'}>Product</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
