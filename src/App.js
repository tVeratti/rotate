import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Routes from './routes/Routes';

import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="app">
          <Header />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
