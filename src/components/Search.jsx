/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Products from './Products';
import '../styles/Search.css';
import cartIcon from '../images/cartIcon.jpg';
// import ProductDetails from './ProductDetails';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productSearch: [],
      answerSearch: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  productList = async (query) => {
    // console.log(query);
    const id = '';
    const resultSearching = await getProductsFromCategoryAndQuery(id, query);
    console.log(resultSearching.results);
    this.setState({
      answerSearch: resultSearching.results,
    });
  }

  render() {
    const { productSearch, answerSearch } = this.state;
    return (
      <>
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
          {/* <ProductDetails answerSearch={ answerSearch } /> */}
        </section>
      </>
    );
  }
}

export default Search;
