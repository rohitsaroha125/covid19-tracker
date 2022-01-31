import React from 'react'
import { Cards } from './components/Cards/Cards'
import { Country } from './components/Country/Country'
import { Chart } from './components/Chart/Chart'

import styles from './App.module.css'

import Logo from './image.png'

import { useSelector } from 'react-redux';

const App=() => {

    const selectedCountry=useSelector((state) => state.countryReducer)

    return(<div>
        <div className='container'>
            <div className='row'>
                <div className={`col-12 text-center ${styles.logoCol}`}>
                <img src={Logo}>
                </img>
                </div>
            </div>
        </div>
        <Country></Country>
        <div className='col-12 text-center' style={{marginBottom:"30px",marginTop:"45px"}}>
        <h4>Showing Data for {selectedCountry}</h4>
        </div>
        <Cards></Cards>
        <Chart></Chart>
    </div>)
}

export default App