import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cartIcon from '../images/cartIcon.jpg';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.getDetails();
  }

  async getProductDetails(item) {
    const url = `https://api.mercadolibre.com/items/${item}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getDetails() {
    const { match: { params: { id } } } = this.props;
    this.setState({
      product: await this.getProductDetails(id),
    });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <div>
          <Link
            to="/carrinho-de-compras"
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
        <p data-testid="product-detail-name">{ product.title }</p>
        <p>{ product.id }</p>
        <p>{ product.price }</p>
        <img src={ product.thumbnail } alt={ product.title } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }).isRequired,
};
