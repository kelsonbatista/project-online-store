import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testis="product-detail-name">
        <h2>{ title }</h2>
        <img
          src={ thumbnail }
          alt={ title }
        />
        <p>{ `R$ ${price}` }</p>
        {/* aqui precisa ser a especificacao tecnica */}
        <p>{ title }</p>
        <button type="button">Ir para o carrinho</button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;
