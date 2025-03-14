import React from 'react'
import { useFetchBeerQuery } from '../store/beer/beer.aip'
import { useParams } from 'react-router-dom'
import { IBeer } from '../interfaces/beer.interface'

const BeerPage:React.FC = () => {
  const {id} = useParams()
  const {data, isLoading} = useFetchBeerQuery(Number(id))
  const {name, image_url} = data ? data[0] : ({} as IBeer)

  if(isLoading) return <h1>Loading....</h1>
  return (
    <div>
      <img src={image_url} alt={name} />
      <h1>{name}</h1>
    </div>
  )
}

export default BeerPage