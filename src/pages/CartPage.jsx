import ProductInCart from "../components/CartPage/ProductInCart";
import { useDispatch, useSelector } from "react-redux";
import { getCardThunk } from "../store/slices/cart.slice";
import { useEffect } from "react";

const CartPage = () => {
  const cart = useSelector((state) => state.cart); // Use correct selector

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardThunk());
  }, [dispatch]);

  return (
    <section>
      <h2>Cart</h2>
      <div>
        {cart.map((prod) => (
          <ProductInCart key={prod.id} prodCart={prod} />
        ))}
      </div>
    </section>
  );
};

export default CartPage;



