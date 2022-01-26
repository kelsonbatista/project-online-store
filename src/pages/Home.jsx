import React from 'react';
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
            <CartButton />
          </div>
          <div className="search__text">
            <h4 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h4>
          </div>
          <div>
            <Products answerSearch={ answerSearch } />
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
