import React, { useContext, useEffect, useReducer } from 'react'
import axios from 'axios';

import reducer from '../reducers/ProductsReducer'
import { 
    SIDEBAR_CLOSE, 
    SIDEBAR_OPEN, 
    GET_PRODUCTS_BEGIN, 
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_ERROR, 
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_ERROR
} from '../utils/actions'
import { products_url as url } from '../utils/constants';

const ProductsContext = React.createContext()

const initialState = {
    isSidebarOpen: false,
    productsLoading: false,
    productsError: false,
    products: [],
    featureProducts: [],
    singleProductLoading: false,
    singleProductError: false,
    singleProduct: []
}

export const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const openSidebar = () => {
        dispatch({ type: SIDEBAR_OPEN })
    }

    const closeSidebar = () => {
        dispatch({ type: SIDEBAR_CLOSE })
    }

    const fetchProducts = async (url) => {
        dispatch({ type: GET_PRODUCTS_BEGIN }) 

        try {
            const response = await axios.get(url);
            const products = response.data

            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products})
        } catch (error) {
            dispatch({ type: GET_PRODUCTS_ERROR })
        }
    }

    const fetchSingleProduct = async (url) => {
        dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
        try {
            const response = await axios.get(url);
            const data = await response.data;

            dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
        }
    }

    useEffect(() => {
        fetchProducts(url)
    }, [])

    return (
        <ProductsContext.Provider
            value={{
                ...state,
                openSidebar,
                closeSidebar,
                fetchSingleProduct
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}