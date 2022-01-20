/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ListFilter from './ListFilter';

class Header extends React.Component {
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
    // console.log(resultSearching.results);
    this.setState({
      answerSearch: resultSearching.results,
    });
  }

  render() {
    const { productSearch, answerSearch } = this.state;
    return (
      <>
        <header className="header">
          <p>Header</p>
          <div>
            <label htmlFor="search">
              <input
                type="text"
                id="search"
                data-testid="query-input"
                value={ productSearch }
                onChange={ this.onInputChange }
              />
              <span className="input-btn-search">
                <button
                  className="btn-search"
                  type="button"
                  data-testid="query-button"
                  onClick={ this.handleClick }
                >
                  pesquise
                </button>
              </span>
            </label>
            <h4
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h4>
          </div>
          <section>
            <Link to="/carrinho-de-compras" data-testid="shopping-cart-button">
              <button
                type="button"
                className="shopping-cart-button"
              >
                Carrinho de compras
              </button>
            </Link>
          </section>
        </header>
        <main>
          <section className="card-product">
            { answerSearch.map((product) => (
              <ListFilter
                key={ product.id }
                title={ product.title }
                thumbnail={ product.thumbnail }
                price={ product.price }
              />
            ))}
          </section>
        </main>
      </>
    );
  }
}

export default Header;
