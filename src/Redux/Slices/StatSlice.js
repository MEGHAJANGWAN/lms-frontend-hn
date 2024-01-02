import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import axiosInstance from '../../Helpers/axiosInstance';

const initialState = {
    allUsersCount: 0,
    subscriberdCount: 0
};

export const getStatsData = createAsyncThunk("stats/get", async () => {
      try {
        const response = axiosInstance 

      } catch(error) {
        toast.error(error?.response?.data?.message);

      }
})

const statSlice = createSlice({
    name: "state",
    initialState,
    reducers: {},
    extraReducers: () => {}
});

export default statSlice.reducer;