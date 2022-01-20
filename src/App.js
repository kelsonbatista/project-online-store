import React from 'react';
import Home from './pages/Home';
import './App.css';
import './project.css';
import Categories from './components/Categories';

class App extends React.Component {
  render() {
    return (
      <main>
        <section className="categories">
          <Categories />
        </section>
        <section className="products">
          <Home />
          <p>Products List</p>
        </section>
      </main>
    );
  }
}

export default App;
