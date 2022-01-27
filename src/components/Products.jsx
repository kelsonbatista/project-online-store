/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import ProductsItem from './ProductsItem';
import '../styles/Products.css';

class Products extends React.Component {
  constructor() {
    super();

    this.state = {
      qtyStateSum: 1,
    };
  }

  render() {
    const { answerSearch } = this.props;
    const { qtyStateSum } = this.state;
    // console.log('pagina certa', this.props);

    return (
      <section className="products__section">
        <div className="products__div">
          { answerSearch.map((product) => (
            <ProductsItem
              key={ product.id }
              title={ product.title }
              thumbnail={ product.thumbnail }
              price={ product.price }
              id={ product.id }
              available={ product.available_quantity }
              freeShipping={ product.shipping.free_shipping }
              qtyStateSum={ qtyStateSum }
            />
          ))}
        </div>
      </section>
    );
  }
}

Products.propTypes = {
  answerSearch: PropTypes.string,
}.isRequired;

export default Products;
