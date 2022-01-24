import React from 'react';
import '../styles/Home.css';
import Search from '../components/Search';

class Home extends React.Component {
  render() {
    return (
      <section className="board">
        <div className="search">
          <Search />
        </div>
      </section>
    );
  }
}

export default Home;
