import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search">
          <input
            type="text"
            id="search"
          />
        </label>
        <h4
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
      </div>
    );
  }
}
