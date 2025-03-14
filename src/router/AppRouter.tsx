import React from 'react'
import { Route, Routes} from 'react-router-dom'
import BeerPage from '../pages/BeerPage'
import BeersPage from '../pages/BeersPage'
import HomePage from '../pages/HomePage'

const AppRouter:React.FC= () => {
  return (
    <Routes>
        <Route path='/beers'>
            <Route index element={<BeersPage/>}/>
            <Route path=':id' element={<BeerPage/>}/>
        </Route>
            <Route path='/' element={<HomePage/>}/>
    </Routes>
  )
}

export default AppRouter