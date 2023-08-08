import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCartG } from '../../store/slices/cart.slice';
import { updateCartQuantity } from '../../store/slices/cart.slice'; // Asumiendo que existe una acción para actualizar la cantidad en el carrito

const ProductInCart = ({ prodCart }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCartG(prodCart.id));
  };

  const handleDecreaseQuantity = () => {
    if (prodCart.quantity > 1) {
      const updatedCartProduct = {
        ...prodCart,
        quantity: prodCart.quantity - 1,
      };
      dispatch(updateCartQuantity(updatedCartProduct));
    }
  };

  const handleIncreaseQuantity = () => {
    const updatedCartProduct = {
      ...prodCart,
      quantity: prodCart.quantity + 1,
    };
    dispatch(updateCartQuantity(updatedCartProduct));
  };

  return (
    <article>
      <header>
        <img src={prodCart.product.images[0].url} alt="" />
      </header>
      <section>
        <h3>{prodCart.product.title}</h3>
        <div>
          <button onClick={handleDecreaseQuantity}>-</button>
          <span>{prodCart.quantity}</span>
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>
        <button onClick={handleDelete}>
          <i className='bx bx-trash'></i>
        </button>
      </section>
      <footer>
        <span>Subtotal:</span>
        <span>{prodCart.product.price * prodCart.quantity}</span>
      </footer>
    </article>
  );
};

export default ProductInCart;

