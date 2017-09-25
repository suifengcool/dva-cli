import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import products from './routes/products';
import users from './routes/users';


function RouterConfig({ history }) {
  return (
    <Router history={ history }>
        <Route path="/" component={ IndexPage }/>
        <Route path="/products" component={ products }/>
        <Route path="/users" component={ users }/>
    </Router>
  );
}

export default RouterConfig;
