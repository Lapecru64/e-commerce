import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigToken from "../../utils/getConfigToken";

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

export const getCardThunk = () => dispatch => {
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/cart"

  axios.get(url, getConfigToken())
  .then(res => dispatch(setCardG(res.data)))
  .catch(err => console.log(err))
}
