import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBeer } from "../../interfaces/beer.interface";

export const beerApi = createApi({
    reducerPath: 'BeerAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2/' }),
    tagTypes: ['beer'],
    endpoints: (builder) => ({
        fetchBeers: builder.query<IBeer[], { page: number, per_page: number }>({
            query: ({ page, per_page }) => ({
                url: 'beers',
                params: { page, per_page }
            })
        }),

        fetchBeer: builder.query<IBeer[], number>({
            query: (id: number) => ({
                url: `beers/${id}`
            })
        })
    })
});

export const { useFetchBeersQuery, useFetchBeerQuery, usePrefetch } = beerApi;
