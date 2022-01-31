import React, { useEffect, useContext, useReducer } from 'react';

import reducer  from '../reducers/FilterReducer';
import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW } from '../utils/actions';
import { useProductsContext } from './ProductContext';

const FilterContext = React.createContext()

const initialState = {
    filteredProducts: [],
    allProducts: [],
    gridView: true,
    filters: {
        searchQuery: '',
        category: 'all',
        company: 'all',
        color: 'all',
        price: 0,
        freeShipping: false
    }
}

export const FilterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const { products } = useProductsContext();

    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products })
    }, [products])

    const setGridView = () => {
        dispatch({ type: SET_GRIDVIEW })
    }

    const setListView = () => {
        dispatch({ type: SET_LISTVIEW })
    }

    const updateFilters = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
    }

    return (
        <FilterContext.Provider
            value={{
                ...state,
                setGridView,
                setListView,
                updateFilters
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}