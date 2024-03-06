import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../features/Slice'
export const store = configureStore({
    reducer: Reducer
})