import PropTypes from 'prop-types';
import React from 'react';

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
