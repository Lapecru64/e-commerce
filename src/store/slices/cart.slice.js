import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
     setCarG: (state, action) => action.payload,
     addCartG: (state, action) => [...state, action.payload],
     deleteCardG: (state, action) => state.filter( prod => prod.id !== action.payload )
  }  
})

export const { setCardG, addCartG, deleteCardG } = cartSlice.actions

export default cartSlice.reducer