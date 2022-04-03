import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Reviews extends Component {
  constructor() {
    super();

    this.state = {
      score: 0,
      email: '',
      comments: '',
    };
  }

  handleReviews = (event) => {
    event.preventDefault();
    const {
      score,
      email,
      comments,
    } = this.state;

    const { productId } = this.props;

    const review = localStorage.reviews ? JSON.parse(localStorage.reviews) : [];

    review.push({
      productId,
      score,
      email,
      comments,
    });

    localStorage.setItem('reviews', JSON.stringify(review));
    window.location.reload(false);
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  setRating = (index) => {
    console.log(index, 'click');
  }

  render() {
    const {
      score,
      email,
      comments,
    } = this.state;

    const items = JSON.parse(localStorage.getItem('reviews'));
    const reviewItems = (items && items.length) ? items : [];
    const NUM_STARS = 5;
    const { productId } = this.props;

    const listItems = (
      reviewItems.filter((itemReview) => itemReview.productId === productId)
        .map((review, index) => (
          <div className="reviews__item" key={ index }>
            <div className="reviews__item-top">
              <p className="reviews__item-email">{ review.email }</p>
              <p className="reviews__item-score">{ review.score }</p>
            </div>
            <div className="reviews__item-bot">
              <p className="reviews__item-comments">{ review.comments }</p>
            </div>
          </div>
        ))
    );

    return (
      <div>
        <h3>Avaliações: </h3>
        <form className="reviews__form">
          <div className="reviews__form-field">

            {/* implementação rating : https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6 */}
            {[...Array(NUM_STARS)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={ index }
                  data-testid={ `${index}-rating` }
                  className={ index <= score
                    ? 'reviews__form-score-on'
                    : 'reviews__form-score-off' }
                  onClick={ () => this.setRating(index) }
                  // onMouseEnter={ () => setHover(index) }
                  // onMouseLeave={ () => setHover(score) }
                >
                  <span key={ index } className="star">
                    <i className="fas fa-star fa-lg" />
                  </span>
                </button>
              );
            })}
          </div>
          <div className="reviews__form-field">
            <label htmlFor="email">
              <p className="reviews__form-label">Email: </p>
              <input
                id="email"
                type="text"
                name="email"
                data-testid="product-detail-email"
                className="reviews__form-email"
                placeholder="Digite seu email"
                value={ email }
                onChange={ this.handleInputChange }
              />
            </label>
          </div>
          <div className="reviews__form-field">
            <label htmlFor="comments">
              <p className="reviews__form-label">Comentário: </p>
              <textarea
                id="comments"
                name="comments"
                data-testid="product-detail-evaluation"
                className="reviews__form-comments"
                placeholder="Digite seu comentário"
                value={ comments }
                onChange={ this.handleInputChange }
              />
            </label>
          </div>
          <div className="reviews__form-field">
            <button
              id="reviewbtn"
              name="reviewbtn"
              type="submit"
              data-testid="submit-review-btn"
              className="reviews__btn"
              onClick={ this.handleReviews }
            >
              Avaliar
            </button>
          </div>
        </form>
        <div className={ (reviewItems.length !== 0) ? 'reviews__items' : '' }>
          { (reviewItems.length !== 0) ? listItems : [] }
        </div>
      </div>
    );
  }
}

Reviews.propTypes = {
  productId: PropTypes.string,
}.isRequired;

export default Reviews;
