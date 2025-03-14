import React from 'react'
import { IBeer } from '../interfaces/beer.interface'
import { useNavigate } from 'react-router-dom'

interface BeerCardProps {
    beer: IBeer
}

const BeerCard:React.FC <BeerCardProps> = ({beer: {id, image_url, name}}) => {
const navigate = useNavigate()
    return (
    <div onClick={() => navigate(`/beers/${id}`)}>
        <div>
            <img src={image_url} alt={name} />
        </div>
        <div>
            <h2>
                {name}
            </h2>
        </div>
    </div>
  )
}

export default BeerCard