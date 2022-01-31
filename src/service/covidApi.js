import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const covidHeaders={
    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    'x-rapidapi-key': '6d8a0640a6msh6e404dee8081791p117570jsn3a75cab7c683'
}

const baseUrl=`https://covid-193.p.rapidapi.com/`

const createRequest=(url) => ({url, headers: covidHeaders})

export const covidApi=createApi({
    reducerPath:'covidApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCountry: builder.query({
            query: () => createRequest('countries')
        }),
        getStats:builder.query({
            query:() => createRequest('statistics')
        })
    })
})

export const {
    useGetCountryQuery,
    useGetStatsQuery
}=covidApi