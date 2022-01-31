import React,{useState, useEffect} from 'react'

import { useGetStatsQuery } from '../../service/covidApi'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import millify from 'millify'

import CountUp from 'react-countup'

import { useSelector } from 'react-redux';

import {TailSpin} from 'react-loader-spinner'

export const Cards=() => {

    const {data,isFetching}=useGetStatsQuery()
    const selectedCountry=useSelector((state) => state.countryReducer)

    if(isFetching){ return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <TailSpin color="#00BFFF" height={80} width={80} />
          </div>
        </div>
      </div>
    )}

    const filteredData=data?.response.filter((country) => {
        return country?.country==selectedCountry
    })

    console.log(filteredData)

    return(
    <>
    <div className='container'>
    <div className='row'>
        <div className='col-md-3 col-sm-6 col-12'>
        <Card style={{borderBottom:"8px solid #ba14cc"}}>
        <CardContent>
        <Typography variant="body2">
            Total Infected
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
              <CountUp start={0} end={filteredData[0]?.cases?.total} duration={2} separator=','>

              </CountUp>
          </Typography>
          <Typography color="text.secondary">
              {new Date(filteredData[0]?.time).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of people infected by Covid-19
          </Typography>
        </CardContent>
      </Card>
        </div>
        <div className='col-md-3 col-sm-6 col-12'>
        <Card style={{borderBottom:"8px solid #0f3fd1"}}>
        <CardContent>
        <Typography variant="body2">
            Total Active Cases
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          <CountUp start={0} end={filteredData[0]?.cases?.active} duration={2} separator=','>
          </CountUp>
          </Typography>
          <Typography color="text.secondary">
              {new Date(filteredData[0]?.time).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of active cases of Covid-19
          </Typography>
        </CardContent>
      </Card>
        </div>
        <div className='col-md-3 col-sm-6 col-12'>
        <Card style={{borderBottom:"8px solid #13b80d"}}>
        <CardContent>
        <Typography variant="body2">
            Total Recovered
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          <CountUp start={0} end={filteredData[0]?.cases?.recovered} duration={2} separator=','>
          </CountUp>
          </Typography>
          <Typography color="text.secondary">
              {new Date(filteredData[0]?.time).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of people recovered from covid-19
          </Typography>
        </CardContent>
      </Card>
        </div>
        <div className='col-md-3 col-sm-6 col-12'>
        <Card style={{borderBottom:"8px solid #cf2106"}}>
        <CardContent>
        <Typography variant="body2">
            Total Deaths
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          <CountUp start={0} end={filteredData[0]?.deaths?.total} duration={2} separator=','>
          </CountUp>
          </Typography>
          <Typography color="text.secondary">
              {new Date(filteredData[0]?.time).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of deaths caused by Covid-19
          </Typography>
        </CardContent>
      </Card>
        </div>
    </div>
    </div>

    </>
    )
}