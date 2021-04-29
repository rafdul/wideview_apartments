import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { ProductsAll } from './components/views/ProductsAll/ProductsAll';
import { ProductsByCategory } from './components/views/ProductsByCategory/ProductsByCategory';
import { ProductOne } from './components/views/ProductOne/ProductOne';
import { Cart } from './components/views/Cart/Cart';
import { NotFound } from './components/views/NotFound/NotFound';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ffffff' },
    secondary: { main: '#2B4C6F' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/products' component={ProductsAll} />
              <Route exact path='/post/products/:categoryId' component={ProductsByCategory} />
              <Route exact path='/post/products/:categoryId/:id' component={ProductOne} />
              <Route exact path='/cart' component={Cart} />
              <Route path='*' component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
