import React from 'react';
import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Products from '../components/Products';
import CategoryItem from '../components/CategoryItem';
import '../styles/Home.css';
import CartButton from '../components/CartButton';
// import ProductDetails from './ProductDetails';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productSearch: [],
      answerSearch: [],
      // categorieSelect: '',
      isLoading: false,
      categories: [],
      qtyState: 0,
    };
  }

  componentDidMount() {
    this.handleCategories();
  }

  handleCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  handleClick = () => {
    const productSearch = this.state;
    this.productList(productSearch.productSearch);
  }

  onInputChange = ({ target }) => {
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

  addToCart = async ({ target }) => {
    this.setState((prevState) => ({ qtyState: prevState.qtyState + 1 }));

    const cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
    // const check = await cart.filter((item) => item.id === target.getAttribute('data-id'));
    // if (check.length !== 0) {
    //   console.log(check.qtd, 'check');
    //   check.qtd += Number(1);
    // } else {
    cart.push({
      title: target.getAttribute('data-title'),
      thumbnail: target.getAttribute('data-thumbnail'),
      price: target.getAttribute('data-price'),
      id: target.getAttribute('data-id'),
      available: target.getAttribute('data-available'),
      qtd: 1,
    });
    // }
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  render() {
    const {
      productSearch,
      answerSearch,
      isLoading,
      categories,
      qtyState,
    } = this.state;

    // const { cartItemsQty } = this.props;

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
        <section className="board">
          <div className="search">
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
            <CartButton cartItemsQty={ qtyState } />
          </div>
          <div className="search__text">
            <h4 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h4>
          </div>
          <div>
            <Products answerSearch={ answerSearch } cartItemsQty={ this.addToCart } />
          </div>
        </section>
      </main>
    );
  }
}

Home.propTypes = {
  cartItemsQty: PropTypes.number,
}.isRequired;

export default Home;
