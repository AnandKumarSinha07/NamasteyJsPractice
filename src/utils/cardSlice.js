import { createSlice } from '@reduxjs/toolkit'


const cartSlice=createSlice({
    name:'card',
    initialState:{
        value:0
    },
    reducers:{
        addCard:(state)=>{
            state.value+=1
        }
    }
})

export const { addCard } = cartSlice.actions
export default cartSlice.reducer