import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryItem extends Component {
  render() {
    const {
      label,
      id,
      type,
      name,
      dataTestid,
      classElement,
      classDiv,
      checked,
      value,
      onChange,
    } = this.props;

    return (
      <div className={ classDiv }>
        <label htmlFor={ id }>
          <input
            id={ id }
            type={ type }
            name={ name }
            data-testid={ dataTestid }
            className={ classElement }
            checked={ checked }
            value={ value }
            onChange={ onChange }
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
