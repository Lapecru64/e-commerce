import axios from 'axios';
import { useDispatch } from "react-redux";
import { addToCart, getCardThunk, removeFromCart } from "../../store/slices/cart.slice";
import getConfigToken from "../../utils/getConfigToken";

const useCartApi = () => {
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";
  const dispatch = useDispatch();

  //POST
  const addProductInCart = (data) => {
    const url = `${baseUrl}/cart`;
    axios.post(url, data, getConfigToken())
      .then(res => {
        console.log(res.data);
        dispatch(addToCart(res.data)); // Usar la acción addToCart para agregar al estado
        dispatch(getCardThunk());
      })
      .catch(err => console.log(err));
  };

  //DELETE
  const deleteProductInCart = (id) => {
    const url = `${baseUrl}/cart/${id}`;
    axios.delete(url, getConfigToken())
      .then(res => {
        console.log(res.data);
        dispatch(removeFromCart(id)); // Usar la acción removeFromCart para eliminar del estado
        dispatch(getCardThunk());
      })
      .catch(err => console.log(err));
  };

  return { addProductInCart, deleteProductInCart };
}

export default useCartApi;
