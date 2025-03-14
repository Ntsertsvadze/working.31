// import React, { useState } from 'react'
// import { useFetchBeersQuery } from '../store/beer/beer.aip'

// const BeersPage:React.FC = () => {
//   const [page, setPage] = useState(1)
//   const [per_page, setPerPage] = useState(10)

//   const {data, isLoading} = useFetchBeersQuery({page, per_page})
//   if(isLoading) return <h1>Loading....</h1>
  
//   return (
//     <div>
//       <h1>BeersPage</h1>
//       <div>
//         {data?.map((beer) =>(
//           <div key ={beer.id}>
//             <h1>{beer.name}</h1>
//             <img src={beer.image_url} alt={beer.image_url}/>
//           </div>
//         ))}
//       </div>
//       </div>
//   )
// }

// export default BeersPage


import React, { useState } from 'react'
import { useFetchBeersQuery, usePrefetch } from '../store/beer/beer.aip'
import BeerCard from '../components/BeerCard'

const BeersPage: React.FC = () => {
  const [page, setPage] = useState(1)
  const [per_page, setPerPage] = useState(10)
  const { data, isLoading } = useFetchBeersQuery({ page, per_page})
  const prefetch = usePrefetch('fetchBeer')

  if (isLoading) return <h1>Loading....</h1>

  return (
    <div>
      <h1>BeersPage</h1>

      <label>
        Beers per page: 
        <select value={per_page} onChange={(e) => setPerPage(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </label>

      <div className='beer-container'>
        {data?.map((beer) => (
          <button onMouseEnter={() => prefetch(beer.id, {ifOlderThan: 60})}>
          <BeerCard key={beer.id} beer={beer}/>
          </button>
        ))}
      </div>

      <div>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <span> Page {page} </span>
        <button onClick={() => setPage((prev) => prev + 1)}>
          Next
        </button>
      </div>
    </div>
  )
}

export default BeersPage
