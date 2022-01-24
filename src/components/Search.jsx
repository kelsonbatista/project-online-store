/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Products from './Products';
import '../styles/Search.css';
import cartIcon from '../images/cartIcon.jpg';
import CategoryItem from './CategoryItem';
// import ProductDetails from './ProductDetails';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productSearch: [],
      answerSearch: [],
      // categorieSelect: '',
      isLoading: false,
      categories: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    const productSearch = this.state;
    this.productList(productSearch.productSearch);
  }

  onInputChange({ target }) {
    const valueSearch = target.value;
    // console.log(valueSearch);
    this.setState({
      productSearch: valueSearch,
    });
  }

  clickCategorie = ({ target }) => {
    // console.log('clickCategorie')
    // console.log(target.id);
    const idCategorie = target.id;
    this.productList(idCategorie);
    // this.setState({
    //   categorieSelect: idCategorie,
    // });
  }

  productList = async (idCategorie) => {
    // console.log(query);
    const { productSearch } = this.state;
    // const query = productSearch;
    // const id = categorieSelect;
    // console.log(id);
    const resultSearching = await getProductsFromCategoryAndQuery(
      idCategorie,
      productSearch,
    );
    this.setState({
      answerSearch: resultSearching.results,
    });
  }

  render() {
    const {
      productSearch,
      answerSearch,
      isLoading,
      categories,
    } = this.state;
    const categoriesList = categories.map((category) => (
      <CategoryItem
        key={ category.id }
        label={ category.name }
        id={ category.id }
        classElement="category__item"
        classDiv="category__item-div"
        value={ category.name }
        onClick={ this.clickCategorie }
      />
    ));
    return (
      <main>
        <section className="categories">
          <div className="categories__div">
            <h3>Categorias</h3>
            {isLoading ? 'Carregando...' : categoriesList }
          </div>
        </section>
        <section className="search__section">
          <div className="search__div">
            <label htmlFor="search">
              Search:
              <input
                type="text"
                id="search"
                data-testid="query-input"
                className="search__input"
                value={ productSearch }
                onChange={ this.onInputChange }
              />
            </label>
            <button
              className="search__btn"
              type="button"
              data-testid="query-button"
              onClick={ this.handleClick }
            >
              Pesquisar
            </button>
            <Link
              to="/carrinho-de-compras"
              className="cart__btn"
              data-testid="shopping-cart-button"
            >
              <img
                id="cart-button"
                name="cart-button"
                alt="Carrinho de Compras"
                src={ cartIcon }
                className="cart__img"
              />
            </Link>
          </div>
          <div className="search__text">
            <h4 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h4>
          </div>
        </section>
        <section>
          <Products answerSearch={ answerSearch } />
        </section>
      </main>
    );
  }
}

export default Search;
