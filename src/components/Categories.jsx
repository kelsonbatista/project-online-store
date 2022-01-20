import React, { Component } from 'react';
import { getCategories } from '../services/api';
import CategoryItem from './CategoryItem';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      categories: [],
    };
  }

  componentDidMount() {
    this.handleCategories();
  }

  handleCategories = async () => {
    try {
      const categories = await getCategories();
      this.setState({ categories });
    } catch (error) {
      return `Error found: ${error}`;
    }
  }

  render() {
    const {
      isLoading,
      categories,
    } = this.state;

    const categoriesList = categories.map((category) => (
      <CategoryItem
        key={ category.id }
        label={ category.name }
        id={ category.id }
        type="radio"
        name="category"
        dataTestid="category"
        classElement="category__item"
        classDiv="category__item-div"
        value={ category.name }
        onChange={ this.handleChange }
      />
    ));

    return (
      <div className="categories__div">
        <h3>Categorias</h3>
        {isLoading ? 'Carregando...' : categoriesList }
      </div>
    );
  }
}

export default Categories;
