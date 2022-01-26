import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
// import ProductDetails from './ProductDetails';

class ProductsItem extends React.Component {
  constructor() {
    super();
    this.addCart = this.addCart.bind(this);
    // this.getInfo = this.getInfo.bind(this);
  }

  addCart() {
    const {
      title,
      thumbnail,
      price,
      id,
    } = this.props;
    const cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
    cart.push({
      title,
      thumbnail,
      price,
      id,
    }); localStorage.setItem('cart', JSON.stringify(cart));
  }

  render() {
    const {
      title,
      thumbnail,
      price,
      id,
    } = this.props;

    const MAX_TITLE = 40;

    return (
      <div className="products__item" data-testid="product">
        <Link
          to={ { pathname: `/ProductDetails/${id}` } }
          data-testid="product-detail-link"
          className="product-title"
        >
          <p className="products__title">
            {title.length > MAX_TITLE
              ? `${title.substring(0, MAX_TITLE)}...`
              : title}
          </p>
          <img
            src={ thumbnail }
            alt={ title }
            className="products__img"
          />
          <p>{ `R$ ${price}` }</p>
        </Link>
        <button
          className="btn-add-cart"
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addCart }
        >
          AddCarrinho
        </button>

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
