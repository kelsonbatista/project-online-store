import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
// import ProductDetails from './ProductDetails';

class ProductsItem extends React.Component {
  render() {
    const {
      title,
      thumbnail,
      price,
      classDiv,
      classTitle,
      classImg,
      id,
    } = this.props;

    return (
      <div className={ classDiv } data-testid="product">
        <Link
          to={ { pathname: `/ProductDetails/${id}` } }
          data-testid="product-detail-link"
          className="product-title"
        >
          <p className={ classTitle }>{ title }</p>
          <img
            src={ thumbnail }
            alt={ title }
            className={ classImg }
          />
          <p>{ `R$ ${price}` }</p>
          <button type="button">
            View Details
          </button>
        </Link>
      </div>
    );
  }
}

ProductsItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  classDiv: PropTypes.string,
  classTitle: PropTypes.string,
  classImg: PropTypes.string,
}.isRequired;

export default ProductsItem;
