import React from 'react';
import PropTypes from 'prop-types';
import ListFilter from './ListFilter';

class ResultSearch extends React.Component {
  render() {
    const { answerSearch } = this.props;
    return (
      <div>
        { answerSearch.map((product) => (
          <ListFilter
            key={ product.id }
            title={ title }
            thumbnail={ thumbnail }
            price={ price }
          />
        ))}

      </div>
    );
  }
}
ResultSearch.propTypes = {
  answerSearch: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ResultSearch;
