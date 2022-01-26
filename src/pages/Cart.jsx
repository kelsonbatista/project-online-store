import React from 'react';
import CartButton from '../components/CartButton';
import BackButton from '../components/BackButton';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';

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

  render() {
    const { cart } = this.state;
    if (cart === null) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
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
        </div>
        <div className="cart__items">
          {cart.map((product) => (
            <CartItem
              key={ product.id }
              id={ product.id }
              title={ product.title }
              thumbnail={ product.thumbnail }
              price={ product.price }
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Cart;
