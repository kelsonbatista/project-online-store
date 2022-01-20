import React from 'react';
import Categories from '../components/Categories';
import '../styles/Home.css';
import Search from '../components/Search';

class Home extends React.Component {
  render() {
    return (
      <main>
        <section className="categories">
          <Categories />
        </section>
        <section className="board">
          <div className="search">
            <Search />
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
