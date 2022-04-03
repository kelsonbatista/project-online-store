import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Content from './components/Content';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/project-online-store">
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;
