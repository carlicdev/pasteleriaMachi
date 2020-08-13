import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ProductList from './components/Products/ProductList';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className='App bg-gray-100'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/productos' component={ProductList} />
        <Route path='/about' component={About} />
        <Route path='/contacto' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
