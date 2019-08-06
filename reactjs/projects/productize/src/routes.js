import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Product from './pages/product/ProductDetails';
import ProductEdit from './pages/product/ProductUpdate';
import ProductCreate from './pages/product/ProductCreate';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path="/products/:id" component={Product} />
            <Route exact path="/products/:id/edit" component={ProductEdit} />
            <Route exact path="/products/create" component={ProductCreate} />
        </Switch>
    </BrowserRouter>
);                             

export default Routes;