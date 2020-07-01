import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Globals from './components/globals/GlobalStyles';
import Login from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Header from './components/Home/Header';
import Footer from './components/globals/Footer';
import { ProductList } from './pages/ProductList/ProductList';
import MainGallery from './components/ProductDetails/ProductGallery/MainGallery/MainGallery';
import { connect } from 'react-redux';
import FlashMessagesList from './components/FlashMessages/FlashMessagesList';
import { authCheckState, logout } from './store/actions';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { Address } from './pages/Address/Address';
import { Payment } from './pages/Payment/Payment';
import Delivery from './pages/Delivery/Delivery';

class App extends React.Component {
  componentDidMount() {
    this.props.authCheckState();
  }

  onLogout = () => {
    this.props.logout(this.props.history);
  };
  render() {
    return (
      <div>
        <Globals />

        <Header logout={this.onLogout} />
        <FlashMessagesList />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/details/:id' component={ProductDetails} />
          <Route path='/list' component={ProductList} />
          <Route path='/gallery' component={MainGallery} />
          <Route path='/address' component={Address} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/success' component={Delivery} />
          {this.props.isAuthenticated && (
            <Route path='/checkout' component={Payment} />
          )}
          {/* {this.props.isAuthenticated && (
            <Route path='/success' component={Delivery} />
          )} */}
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

const mapDispatchToProps = {
  authCheckState,
  logout,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
