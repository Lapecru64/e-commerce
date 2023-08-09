import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCartItem } from '../../store/slices/cart.slice';
import "./ProductInCart.css"

const ProductInCart = ({ prodCart }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeFromCart(prodCart.id));
  };

  const handleDecreaseQuantity = () => {
    if (prodCart.quantity > 1) {
      const updatedCartProduct = {
        ...prodCart,
        quantity: prodCart.quantity - 1,
      };
      dispatch(updateCartItem(updatedCartProduct));
    }
  };

  const handleIncreaseQuantity = () => {
    const updatedCartProduct = {
      ...prodCart,
      quantity: prodCart.quantity + 1,
    };
    dispatch(updateCartItem(updatedCartProduct));
  };

  return (
    <article className="product-cart">
      <header>
        <img src={prodCart.product.images[0].url} alt="" />
      </header>
      <section>
        <h3>{prodCart.product.title}</h3>
        <div>
          <button className="sub" onClick={handleDecreaseQuantity}>
            -
          </button>
          <span className="quantity">{prodCart.quantity}</span>
          <button className="add" onClick={handleIncreaseQuantity}>
            +
          </button>
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
