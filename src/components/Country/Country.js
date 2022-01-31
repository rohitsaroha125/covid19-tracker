import React, {useState, useEffect} from 'react'

import { useGetCountryQuery } from '../../service/covidApi'
import styles from './Country.module.css'

import { useSelector, useDispatch } from 'react-redux'

export const Country=() => {

    const {data, isFetching}=useGetCountryQuery()
    const [selectCountry,setSelectCountry]=useState("India")

    const dispatch=useDispatch()

    const selectedCountry=useSelector((state) => state.countryReducer)

    useEffect(() => {
        console.log("Selected Country is",selectedCountry)
    },[selectedCountry])

    if(isFetching) return('')

    return(<div className='container'>
        <div className='row'>
            <div className='col-12 text-center'>
                <div className={styles.selectCol}>
                <b>Select Country:</b> <select className='form-control' style={{maxWidth:"300px",marginLeft:"15px"}} onChange={(e) => dispatch({type:"selectCountry",payload: e.target.value})} defaultValue={selectCountry}>
                    {
                        data?.response.map((country,i) => {
                            return <option key={i} value={country}>{country}</option>
                        })
                    }
                </select>
                </div>
            </div>
        </div>
    </div>)
}