import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigToken from "../../utils/getConfigToken";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCartG: (state, action) => action.payload,
    addToCart: (state, action) => [...state, action.payload],
    removeFromCart: (state, action) =>
      state.filter((item) => item.id !== action.payload),
    updateCartItem: (state, action) => {
      const updatedCart = state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return updatedCart;
    },
    clearCart: () => [], // Agrega una nueva acción para eliminar todos los productos del carrito
  },
});

export const { setCartG, addToCart, removeFromCart, updateCartItem, clearCart } = cartSlice.actions;

// ...

export const getCardThunk = () => (dispatch) => {
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";

  axios
    .get(url, getConfigToken())
    .then((res) => dispatch(setCartG(res.data)))
    .catch((err) => {
      console.log(err);
      dispatch(setCartG([]));
    });
};

// ...

export default cartSlice.reducer;
