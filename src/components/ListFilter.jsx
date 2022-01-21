import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class ListFilter extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img
          src={ thumbnail }
          alt={ title }
        />
        <p>{ `R$ ${price}` }</p>
        <Link
          to={ { pathname: '/ProductDetails' } }
          data-testid="product-detail-link"
          className="product-title"
        >
          View Details
        </Link>
      </div>
    );
  }
}

ListFilter.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;

export default ListFilter;
