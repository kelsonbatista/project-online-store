import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class IndividualItem extends Component {
  render() {
    const { id } = this.props;
    return (
      <div>
        <h2>{ id }</h2>
      </div>
    );
  }
}

IndividualItem.propTypes = {
  id: PropTypes.string,
}.isRequired;
