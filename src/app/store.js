import { configureStore, createStore } from "@reduxjs/toolkit";

import { covidApi } from "../service/covidApi";
import {countryReducers} from "../reducers/countryReducers";

export const store=configureStore({
    reducer:{
        [covidApi.reducerPath]: covidApi.reducer,
        countryReducer: countryReducers
    }
})