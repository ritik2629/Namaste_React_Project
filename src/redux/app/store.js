import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartSliceReducer from "../features/cartSlice";

 const store=configureStore({
    reducer:{
        cart:cartSliceReducer 
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store