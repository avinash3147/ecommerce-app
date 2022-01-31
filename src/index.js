import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/ProductContext';
import { FilterProvider } from './context/FilterContext';


ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

