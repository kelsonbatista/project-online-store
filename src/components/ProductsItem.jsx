import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
// import ProductDetails from './ProductDetails';

class ProductsItem extends React.Component {
  constructor() {
    super();

    this.state = {
      qtyState: 1,
    };
  }

  addCart = () => {
    const {
      title,
      thumbnail,
      price,
      id,
      available,
    } = this.props;

    this.setState((prevState) => ({ qtyState: prevState.qtyState + 1 }));

    const cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];

    cart.push({
      title,
      thumbnail,
      price,
      id,
      available,
      qtd: 1,
    });
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  render() {
    const {
      title,
      thumbnail,
      price,
      id,
      freeShipping,
    } = this.props;

    const freteGratisNao = <p className="products__shipping-not">Hidden</p>;
    const freteGratisSim = (
      <p
        className="products__shipping"
        data-testid="free-shipping"
      >
        Frete grátis
      </p>);

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
          { freeShipping ? freteGratisSim : freteGratisNao }
        </Link>
        <button
          className="products__btn-add"
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addCart }
        >
          Adicionar Carrinho
        </button>

      </div>
    );
  }
}

ProductsItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  available: PropTypes.number,
  classDiv: PropTypes.string,
  classTitle: PropTypes.string,
  classImg: PropTypes.string,
}.isRequired;

export default ProductsItem;
