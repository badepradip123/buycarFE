import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Globals from './components/globals/GlobalStyles';
import Login from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <Globals />
      <BrowserRouter>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
