import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
    key: "",
    subscription_id: "",
    isPaymentVerified: false,
    allPayments: {},
    finalMonths: {},
    monthlySalesRecord: []
}

export const getRazorPayId = createAsyncThunk("/razorpay/getId", async() => {
    try {
       const response = await axiosInstance.get("/payments/razorpay-key");
       return response.data;
    } catch(error) {
        toast.error("Failed to load data");
    }
})

export const purchaseCourseBundle = createAsyncThunk("/purchaseCourse", async() => {
    try {
       const response = await axiosInstance.post("/payments/subscribe");
       return response.data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
})

const razorpaySlice = createSlice({
    name: "razorpay",
    initialState,
    reducers: {},
    extraReducers: () => {
        
    }
});

export default razorpaySlice.reducer;