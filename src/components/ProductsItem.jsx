import PropTypes from 'prop-types';
import React from 'react';

class ProductsItem extends React.Component {
  render() {
    const {
      title,
      thumbnail,
      price,
      classDiv,
      classTitle,
      classImg,
    } = this.props;

    return (
      <div className={ classDiv } data-testid="product">
        <p className={ classTitle }>{ title }</p>
        <img
          src={ thumbnail }
          alt={ title }
          className={ classImg }
        />
        <p>{ `R$ ${price}` }</p>
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
