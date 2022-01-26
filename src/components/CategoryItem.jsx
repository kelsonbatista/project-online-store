import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryItem extends Component {
  render() {
    const {
      label,
      id,
      checked,
      value,
      onClick,
    } = this.props;

    return (
      <div className="category__item-div">
        <label htmlFor={ id }>
          <input
            id={ id }
            checked={ checked }
            value={ value }
            onClick={ onClick }
            type="radio"
            name="category"
            data-testid="category"
            className="category__item"
          />
          {label}
        </label>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  dataTestid: PropTypes.string,
  classElement: PropTypes.string,
  classDiv: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default CategoryItem;
