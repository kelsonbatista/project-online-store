import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../images/backIcon.jpg';
import '../styles/BackButton.css';

class BackButton extends Component {
  render() {
    return (
      <div className="cart__back">
        <Link
          to="/"
          className="back__btn"
          data-testid="shopping-back-button"
        >
          <img
            id="back-button"
            name="back-button"
            alt="Voltar"
            src={ backIcon }
            className="back__img"
          />
        </Link>
      </div>
    );
  }
}

export default BackButton;
