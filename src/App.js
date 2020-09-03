import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Home from './components/pages/home'
import Footer from './components/footer';

// my components

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;