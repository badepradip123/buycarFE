import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Globals from './components/globals/GlobalStyles';
import Login from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import Header from './components/Home/Header';
import Footer from './components/globals/Footer';
import { ProductList } from './pages/ProductList/ProductList';
import MainGallery from './components/ProductDetails/ProductGallery/MainGallery/MainGallery';
import { connect } from 'react-redux';
import FlashMessagesList from './components/FlashMessages/FlashMessagesList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Globals />

        <Header />
        <FlashMessagesList />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/details' component={ProductDetails} />
          <Route path='/list' component={ProductList} />
          <Route path='/gallery' component={MainGallery} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Redirect to='/' />
        </Switch>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
