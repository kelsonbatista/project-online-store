import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cartIcon from '../images/cartIcon.jpg';
import backIcon from '../images/backIcon.jpg';
import '../styles/ProductDetails.css';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    this.getDetails();
  }

  getProductDetails = async (item) => {
    const url = `https://api.mercadolibre.com/items/${item}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  getDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const details = await this.getProductDetails(id);
    this.setState({
      product: details,
    });
  }

  addToCart = () => {
    const {
      product,
    } = this.state;

    console.log(product.title);

    const cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];

    cart.push({
      title: product.title,
      thumbnail: product.thumbnail,
      price: product.price,
      id: product.id,
    });

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  render() {
    const { product } = this.state;

    if (product.length === 0) {
      return <p>Loading...</p>;
    }

    return (
      <section className="details">
        <div className="details__header">
          <div className="details__back">
            <Link
              to="/"
              className="back__btn"
              data-testid="shopping-back-button"
            >
              <img
                id="back-button"
                name="back-button"
                alt="Voltar"
                src={ backIcon }
                className="back__img"
              />
            </Link>
          </div>
          <div className="details__cart">
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
          </div>
        </div>
        <div className="details__product">
          <div className="details__left">
            <p className="details__title" data-testid="product-detail-name">
              { product.title }
            </p>
            <img
              className="details__img"
              src={ product.thumbnail }
              alt={ product.title }
            />
            <p className="details__id">{ product.id }</p>
            <p className="details__price">{ `R$ ${product.price}` }</p>
            <button
              className="details__btn-add"
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ this.addToCart }
            >
              Adicionar ao Carrinho
            </button>
          </div>
          <div className="details__right">
            <h3>Características: </h3>
            <ul>
              {(product.attributes)
                .map(({ name, value_name: valueName }, index) => (
                  <li key={ index }>{ `${name}: ${valueName} `}</li>))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
