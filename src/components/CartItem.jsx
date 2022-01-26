import PropTypes from 'prop-types';
import React from 'react';
import '../styles/Cart.css';

const MIN_VALUE = 0;

class CartItem extends React.Component {
  constructor() {
    super();

    this.state = {
      qtdValue: 1,
      isButtonDisabled: true,
      // totalCart: 0,
      subTotal: 0,

    };
    this.handleClickIncrease = this.handleClickIncrease.bind(this);
    this.handleClickDecrease = this.handleClickDecrease.bind(this);
    this.cartSubTotal = this.cartSubTotal.bind(this);
    this.removeItem = this.removeItem.bind(this);
    // this.totalCart = this.totalCart.bind(this);
  }

  componentDidMount() {
    const { qtdValue } = this.state;
    const { price } = this.props;
    const qtdSum = qtdValue;
    this.cartSubTotal(qtdSum, price);
    // this.totalCart();
  }

  handleClickIncrease() {
    const { qtdValue } = this.state;
    const { price } = this.props;
    // console.log(price);
    let qtdSum = qtdValue;

    this.setState({
      qtdValue: qtdSum += 1,
    }); if (qtdSum >= MIN_VALUE) {
      this.setState({
        isButtonDisabled: false,
      }); this.cartSubTotal(price, qtdSum);
      // this.totalCart();
    }
  }

  handleClickDecrease() {
    const { qtdValue } = this.state;
    let qtdSub = qtdValue;
    this.removeItem();
    // this.totalCart();
    this.setState({
      qtdValue: qtdSub -= 1,
    }); if (qtdSub <= MIN_VALUE) {
      this.setState({
        isButtonDisabled: true,
      });
    }
  }

  removeItem() {
    const { subTotal } = this.state;
    // console.log(subTotal);
    const { price } = this.props;
    // console.log(price);
    const updateSubTotal = subTotal - price;
    // console.log(updateSubTotal);
    this.setState({
      subTotal: updateSubTotal,
    });
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
    const { qtdValue, isButtonDisabled, subTotal } = this.state;
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
          <p
            data-testid="shopping-cart-product-name"
          >
            {title}
          </p>
        </div>
        <div className="cart__qty">
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.handleClickIncrease }
          >
            {' '}
            +
            {' '}
          </button>
          <span data-testid="shopping-cart-product-quantity">{qtdValue}</span>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.handleClickDecrease }
            disabled={ isButtonDisabled }
          >
            -
            {' '}
          </button>
        </div>
        <div className="cart__sub">
          <p>
            {subTotal}
          </p>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  classDiv: PropTypes.string,
  classTitle: PropTypes.string,
  classImg: PropTypes.string,
}.isRequired;

export default CartItem;
