import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../images/cartIcon.jpg';
import '../styles/CartButton.css';

class CartButton extends Component {
  render() {
    const cartItemsQty = localStorage.cart ? JSON.parse(localStorage.cart).length : 0;

    return (
      <div className="cart__btn-div">
        <Link
          to="/cart"
          className="cart__btn"
          data-testid="shopping-cart-button"
        >
          <img
            id="cart-button"
            name="cart-button"
            alt="Carrinho de Compras"
            src={ cartIcon }
            className="cart__img"
          />
        </Link>
        <div className="cart__btn-qty"><p>{cartItemsQty}</p></div>
      </div>
    );
  }
}

export default CartButton;
