import {configureStore} from '@reduxjs/toolkit'
import {Reducer} from './index'
const store=configureStore({
    reducer:{
        auth:Reducer
    }
})
export default store;