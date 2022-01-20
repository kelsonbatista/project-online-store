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
    try {
      // this.setState({ isLoading: true });
      const categories = await getCategories();
      categories.forEach((category) => {
        const item = document.createElement('button');
        item.type = 'button';
        item.id = category.id;
        item.name = category.name;
        item.value = category.name;
        item.innerText = category.name;
        item.className = 'category__item';
        item.dataset.testid = 'category';
        const catList = document.querySelector('#categories-list');
        catList.appendChild(item);
      });
      // this.setState({ isLoading: false });
    } catch (error) {
      return `Error found: ${error}`;
    }
  }

  render() {
    const {
      isLoading,
    } = this.state;

    const categoriesList = <div className="categories__list" id="categories-list" />;

    return (
      <div className="categories__div">
        <h3>Categorias</h3>
        {isLoading ? 'Carregando...' : categoriesList }
      </div>
    );
  }
}

export default Categories;
