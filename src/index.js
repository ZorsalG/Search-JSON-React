import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Body from './components/body'
import Footer from './components/footer';


ReactDOM.render(
  <div>
    <Header />
    <Body />
    <Footer />
  </div>,
  document.getElementById('root')
);