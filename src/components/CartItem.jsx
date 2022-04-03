import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Cart.css';
import deleteIcon from '../images/delete2.png';

const MIN_VALUE = 1;

class CartItem extends React.Component {
  constructor() {
    super();

    this.state = {
      qtdValue: 1,
      subTotal: 0,
      increaseDisabled: false,
      decreaseDisabled: true,
      // totalCart: 0,

    };
    this.handleClickIncrease = this.handleClickIncrease.bind(this);
    this.handleClickDecrease = this.handleClickDecrease.bind(this);
    this.cartSubTotal = this.cartSubTotal.bind(this);
  }

  componentDidMount() {
    const { id, qtd, price, available } = this.props;
    this.cartSubTotal(price, qtd);
    // this.totalCart();
    this.updateState(qtd, price);
    this.updateCart(id, qtd, price, available);
  }

  handleClickIncrease() {
    const { id, qtd, price, available } = this.props;
    const netPrice = price / qtd;
    const { qtdValue } = this.state;
    this.setState(() => ({
      qtdValue: qtdValue + 1,
      subTotal: (netPrice) * (qtdValue + 1),
      increaseDisabled: ((qtdValue + 1) >= available),
      decreaseDisabled: ((qtdValue + 1) < MIN_VALUE),
    }), () => this.updateCart(id, undefined, undefined, available));
  }

  handleClickDecrease() {
    const { id, qtd, price } = this.props;
    const netPrice = price / qtd;
    const { qtdValue } = this.state;
    const qtdNew = ((qtdValue - 1 <= 1) ? 1 : (qtdValue - 1));
    this.setState(() => ({
      qtdValue: qtdNew,
      subTotal: (netPrice) * qtdNew,
      decreaseDisabled: ((qtdValue - 1) < MIN_VALUE + 1),
    }), () => this.updateCart(id, qtdNew, (netPrice) * qtdNew, undefined));
  }

  updateCart = (id, qtd, price, available) => {
    const { qtdValue, subTotal } = this.state;
    const cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
    if (cart) {
      const itemIndex = cart.findIndex((item) => item.id === id);
      cart[itemIndex].qtd = (qtdValue <= 1) ? qtd : qtdValue;
      cart[itemIndex].price = (qtdValue <= 1) ? price : subTotal;
      const qtdCheck = (cart[itemIndex].qtd >= available);
      localStorage.setItem('cart', JSON.stringify(cart));
      this.setState({
        increaseDisabled: (qtdCheck),
      });
    }
  }

  updateState = (qtd, price) => {
    this.setState(({
      qtdValue: qtd,
      subTotal: price,
      decreaseDisabled: (qtd <= MIN_VALUE),
    }));
  }

  deleteItem = () => {
    const { id } = this.props;
    const cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
    if (cart) {
      const filter = cart.filter((item) => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(filter));
    }
    window.location.reload(false);
  }

  cartSubTotal(price, amount) {
    // console.log(price * amount);
    this.setState({
      subTotal: price * amount,
    });
  }

  // totalCart() {
  //   let { subTotal } = this.state;
  //   console.log(subTotal);
  //   this.setState({
  //     totalCart: subTotal += subTotal,
  //   });
  // }

  render() {
    const {
      qtdValue,
      subTotal,
      increaseDisabled,
      decreaseDisabled,
    } = this.state;

    const {
      title,
      thumbnail,
      id,
    } = this.props;

    return (
      <div key={ id } className="cart__item">
        <div className="cart__img-div">
          <img
            src={ thumbnail }
            alt={ title }
            className="cart__img-prod"
          />
        </div>
        <div className="cart__title">
          <Link
            to={ { pathname: `/ProductDetails/${id}` } }
            data-testid="product-detail-link"
            className="product-title"
            key={ id }
          >
            <p
              data-testid="shopping-cart-product-name"
            >
              {title}
            </p>
          </Link>
        </div>
        <div className="cart__qty">
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.handleClickIncrease }
            disabled={ increaseDisabled }
          >
            {' + '}
          </button>
          <span
            className="cart__qty-text"
            data-testid="shopping-cart-product-quantity"
          >
            {qtdValue}
          </span>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.handleClickDecrease }
            disabled={ decreaseDisabled }
          >
            {' - '}
          </button>
        </div>
        <div className="cart__sub">
          <p>
            {subTotal}
          </p>
        </div>
        <div className="cart__del">
          <button
            type="button"
            className="cart__del-btn"
            onClick={ this.deleteItem }
          >
            <img
              src={ deleteIcon }
              alt="Delete"
            />
          </button>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  qtd: PropTypes.number,
  thumbnail: PropTypes.string,
  available: PropTypes.number,
}.isRequired;

export default CartItem;
