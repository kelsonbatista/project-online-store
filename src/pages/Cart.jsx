import React from 'react';
import PropTypes from 'prop-types';
import CartButton from '../components/CartButton';
import BackButton from '../components/BackButton';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';
import CartEmpty from '../components/CartEmpty';
import delete1 from '../images/delete1.jpeg';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };
    this.getCart = this.getCart.bind(this);
  }

  componentDidMount() {
    this.getCart();
  }

  getCart() {
    const storageCart = JSON.parse(localStorage.getItem('cart'));
    this.setState({
      cart: storageCart,
    });
  }

  redirectRoute = () => {
    const { history } = this.props;
    history.push('/checkout');
  }

  render() {
    const { cart } = this.state;
    const { cartItemsQty } = this.props;
    if (cart === null) {
      return (
        <CartEmpty />
      );
    }

    return (
      <section className="cart">
        <div className="cart__header">
          <BackButton />
          <CartButton />
        </div>
        <div className="cart__table">
          <div className="cart__table-title">Nome</div>
          <div className="cart__table-qty">Qtd</div>
          <div className="cart__table-sub">Subtotal</div>
          <div className="cart__table-del">
            <img src={ delete1 } alt="Remover" />
          </div>
        </div>
        <div className="cart__items">
          {cart.map((product, index) => (
            <CartItem
              key={ index }
              id={ product.id }
              qtd={ product.qtd }
              title={ product.title }
              thumbnail={ product.thumbnail }
              price={ product.price }
              available={ product.available }
              onClick={ cartItemsQty }
            />
          ))}
        </div>
        <div className="cart__btn-chk-div">
          <button
            className="cart__btn-chk"
            type="button"
            data-testid="checkout-products"
            onClick={ this.redirectRoute }
          >
            Finalizar Compra
          </button>
        </div>
      </section>
    );
  }
}

Cart.propTypes = {
  history: PropTypes.array,
  cartItemsQty: PropTypes.number,
}.isRequired;

export default Cart;
