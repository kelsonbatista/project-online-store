import React from 'react';
import CartButton from '../components/CartButton';
import BackButton from '../components/BackButton';
import '../styles/Checkout.css';

class Checkout extends React.Component {
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

  getCart = () => {
    const storageCart = JSON.parse(localStorage.getItem('cart'));
    this.setState({
      cart: storageCart,
    });
  }

  render() {
    const { cart } = this.state;
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    if (cart === null) {
      return (
        <p data-testid="shopping-checkout-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <section className="checkout">
        <div className="checkout__header">
          <BackButton />
          <CartButton />
        </div>
        <div className="checkout__table">
          <div className="checkout__table-title">Nome</div>
          <div className="checkout__table-qty">Qtd</div>
          <div className="checkout__table-sub">Subtotal</div>
        </div>
        <div className="checkout__items">
          {cart.map((product, index) => (
            <div key={ index } className="checkout__item">
              <div className="checkout__item-title">
                <p>{ product.title }</p>
              </div>
              <div className="checkout__item-qty">
                <p>{ product.qtd }</p>
              </div>
              <div className="checkout__item-sub">
                <p>{ product.price }</p>
              </div>
            </div>
          ))}
          <div className="checkout__total">
            <p>{ `Total: R$ ${total}` }</p>
          </div>
        </div>
        <p className="checkout__heading">Informações do comprador:</p>
        <div className="checkout__info">
          <input
            id="fullname"
            name="fullname"
            placeholder="Nome completo"
            className="checkout__fullname checkout__form-item"
            data-testid="checkout-fullname"
          />
          <input
            id="cpf"
            name="cpf"
            placeholder="CPF"
            className="checkout__cpf checkout__form-item"
            data-testid="checkout-cpf"
          />
          <input
            id="email"
            name="email"
            placeholder="Email"
            className="checkout__email checkout__form-item"
            data-testid="checkout-email"
          />
          <input
            id="phone"
            name="phone"
            placeholder="Telefone"
            className="checkout__phone checkout__form-item"
            data-testid="checkout-phone"
          />
          <input
            id="cep"
            name="cep"
            placeholder="CEP"
            className="checkout__cep checkout__form-item"
            data-testid="checkout-cep"
          />
          <input
            id="address"
            name="address"
            placeholder="Endereço"
            className="checkout__address checkout__form-item"
            data-testid="checkout-address"
          />
          <input
            id="extra"
            name="extra"
            placeholder="Complemento"
            className="checkout__extra checkout__form-item"
            data-testid="checkout-extra"
          />
          <input
            id="number"
            name="number"
            placeholder="Número"
            className="checkout__number checkout__form-item"
            data-testid="checkout-number"
          />
          <input
            id="city"
            name="city"
            placeholder="Cidade"
            className="checkout__city checkout__form-item"
            data-testid="checkout-city"
          />
          <input
            id="state"
            name="state"
            placeholder="Estado"
            className="checkout__state checkout__form-item"
            data-testid="checkout-state"
          />
        </div>
        <p className="checkout__heading">Método de pagamento:</p>
        <div className="checkout__pay">
          <label htmlFor="boleto">
            <input type="radio" name="pay" id="boleto" value="boleto" />
            {' Boleto '}
            <i className="fas fa-barcode" />
          </label>
          <label htmlFor="visa">
            <input type="radio" name="pay" id="visa" value="visa" />
            {' Visa '}
            <i className="far fa-credit-card" />
          </label>
          <label htmlFor="master">
            <input type="radio" name="pay" id="master" value="mastercard" />
            {' MasterCard '}
            <i className="far fa-credit-card" />
          </label>
          <label htmlFor="elo">
            <input type="radio" name="pay" id="elo" value="elo" />
            {' Elo '}
            <i className="far fa-credit-card" />
          </label>
        </div>
        <div className="checkout__btn-div">
          <button
            className="checkout__btn"
            type="button"
            data-testid="product-checkkout-add-to-cart"
          >
            Finalizar Compra
          </button>
        </div>
      </section>
    );
  }
}

export default Checkout;
