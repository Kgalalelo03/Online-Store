import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
