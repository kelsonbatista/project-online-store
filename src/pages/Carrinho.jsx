import React from 'react';
import Cart from '../components/Cart';

class Carrinho extends React.Component {
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
      <div className="products__details">
        {cart.map((product) => (
          <Cart
            key={ product.id }
            id={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
          />
        ))}
      </div>
    );
  }
}

export default Carrinho;
