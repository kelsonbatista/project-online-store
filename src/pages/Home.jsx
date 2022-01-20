import React from 'react';
import Categories from '../components/Categories';
import Header from '../components/Header';

class Home extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Categories />
      </main>
    );
  }
}

export default Home;
