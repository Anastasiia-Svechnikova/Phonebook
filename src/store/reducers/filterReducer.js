import { createReducer } from '@reduxjs/toolkit';
import changeFilter from "store/actions/filterActions";

export default createReducer('',{
    [changeFilter]: (state, action) => action.payload,
})
