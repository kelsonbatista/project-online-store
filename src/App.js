import React from 'react';
import Home from './pages/Home';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <section>
            <Home />
          </section>
        </header>
        <main>
          <section>
            <p>Main</p>
          </section>
        </main>
      </>
    );
  }
}

export default App;
