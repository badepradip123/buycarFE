import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Globals from './components/globals/GlobalStyles';
import Login from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import Header from './components/Home/Header';
import Footer from './components/globals/Footer';

function App() {
  return (
    <div>
      <Globals />

      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/details' component={ProductDetails} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
