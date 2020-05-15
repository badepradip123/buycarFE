import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Globals from './components/globals/GlobalStyles';

const PageOne = () => {
  return <div>PageOne</div>;
};

const PageTwo = () => {
  return <div>PageTwo</div>;
};

function App() {
  return (
    <div>
      <Globals />
      <BrowserRouter>
        <Route path='/' exact component={Home} />
        <Route path='/pageone' component={PageOne} />
      </BrowserRouter>
    </div>
  );
}

export default App;
