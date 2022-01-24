/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import ProductsItem from './ProductsItem';
import '../styles/Products.css';

class Products extends React.Component {
  render() {
    const { answerSearch } = this.props;
    console.log('pagina certa', this.props);

    return (
      <section className="products__section">
        <div className="products__div">
          { answerSearch.map((product) => (
            <ProductsItem
              key={ product.id }
              title={ product.title }
              thumbnail={ product.thumbnail }
              price={ product.price }
              classDiv="products__item"
              classTitle="products__title"
              classImg="products__img"
              id={ product.id }
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
