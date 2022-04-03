import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cartIcon from '../images/cartIcon.jpg';
import '../styles/CartButton.css';

class CartButton extends Component {
  componentDidMount() {
    this.updateCart();
  }

  updateCart = () => {
    const cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
    if (cart) {
      const qtyItems = cart.reduce((acc, item) => acc + item.qtd, 0);
      const { cartItemsQty } = this.props;
      return (qtyItems || qtyItems + cartItemsQty);
    }
  }

  render() {
    // const cartItems = localStorage.cart ? JSON.parse(localStorage.cart) : [];
    // const cartItemsQty = cartItems.reduce((acc, item) => acc + item.qtd, 0);
    // const { cartItemsQty } = this.props;
    const getCart = this.updateCart();
    // console.log(getCart);

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
        <div className="cart__btn-qty">
          <p data-testid="shopping-cart-size">{ getCart }</p>
        </div>
      </div>
    );
  }
}

CartButton.propTypes = {
  cartItemsQty: PropTypes.number,
}.isRequired;

export default CartButton;
