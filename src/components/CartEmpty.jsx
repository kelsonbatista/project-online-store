import React, { Component } from 'react';
import BackButton from './BackButton';
import CartButton from './CartButton';
import '../styles/CartEmpty.css';
import cartIcon from '../images/cartIcon.jpg';

class CartEmpty extends Component {
  render() {
    return (
      <section className="cart">
        <div className="cart__header">
          <BackButton />
          <CartButton />
        </div>
        <div className="cart__empty">
          <div className="cart__empty-img">
            <img src={ cartIcon } alt="Empty cart" className="cart__empty-img" />
          </div>
          <div className="cart__empty-text">
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          </div>
        </div>
      </section>
    );
  }
}

export default CartEmpty;
