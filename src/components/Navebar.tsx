import React from 'react'
import { Link } from 'react-router-dom'

const Navebar:React.FC = () => {
  return (
    <nav style={{display: 'flex', color: 'green', gap: '40px'}}>
        <li>
            <Link to={'/'}>home</Link>
        </li>
        <li>
            <Link to={'/beers'}>beers</Link>
        </li>
        {/* <li>
            <Link to={'/beer'}>beer</Link>
        </li> */}
    </nav>
  )
}

export default Navebar