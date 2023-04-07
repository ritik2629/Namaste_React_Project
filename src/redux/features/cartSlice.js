import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[]
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearItem:(state)=>{
            state.items=[]
        }
    }
})

export const {addItem,removeItem,clearItem} =cartSlice.actions
export default cartSlice.reducer 