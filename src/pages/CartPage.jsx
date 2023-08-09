import React, { useState, useEffect } from "react";
import ProductInCart from "../components/CartPage/ProductInCart";
import { useDispatch, useSelector } from "react-redux";
import { getCardThunk, clearCart, removeFromCart } from "../store/slices/cart.slice";


const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardThunk());
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalToPay, setTotalToPay] = useState(0);

  const calculateTotalToPay = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    setTotalToPay(total);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    closeModal();
  };

  const handleDeleteProduct = (productId) => {
    dispatch(removeFromCart(productId));
    // Después de eliminar el producto del carrito, actualiza el carrito desde la API nuevamente
    dispatch(getCardThunk());
  };

  return (
    <section>
      <h2>Cart</h2>
      <div>
        {cart.map((prod) => (
          <ProductInCart
            key={prod.id}
            prodCart={prod}
            onDelete={() => handleDeleteProduct(prod.product.id)}
          />
        ))}
      </div>
      <button onClick={calculateTotalToPay}>Calculate Total</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Total to pay: {totalToPay}</p>
            <button onClick={handleClearCart}>Go to payment page</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartPage;
