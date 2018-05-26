import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Routes from './routes/Routes';

import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div id="app">
            <Header />
            <Routes />
            <Footer />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
