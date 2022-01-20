import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ListFilter from '../components/ListFilter';

class Home extends React.Component {
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
          <button
            type="button"
            className="shopping-cart-button"
          >
            Carrinho de compras
          </button>
        </section>
        <main>
          <section className="card-product">
            {answerSearch.map((product) => (
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

export default Home;
