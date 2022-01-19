import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this.listCategories();
  }

  listCategories = async () => {
    this.setState({ isLoading: true });
    try {
      const categories = await getCategories();
      categories.forEach((category) => {
        const ul = document.querySelector('#categories-list');
        const li = document.createElement('li');
        li.className = 'categories__item';
        li.id = category.id;
        li.innerText = category.name;
        ul.appendChild(li);
      });
    } catch (error) {
      return `Error found: ${error}`;
    }
    this.setState({ isLoading: false });
  }

  render() {
    const {
      isLoading,
    } = this.state;

    return (
      <div className="categories">
        <h3>Categorias</h3>
        {isLoading
          ? 'Carregando...'
          : <ul className="categories__list" id="categories-list" /> }
      </div>
    );
  }
}

export default Categories;
