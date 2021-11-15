import { 
    GET_PRODUCTS_BEGIN, 
    GET_PRODUCTS_ERROR, 
    GET_PRODUCTS_SUCCESS, 
    GET_SINGLE_PRODUCT_BEGIN, 
    GET_SINGLE_PRODUCT_ERROR, 
    GET_SINGLE_PRODUCT_SUCCESS, 
    SIDEBAR_CLOSE, 
    SIDEBAR_OPEN 
} from "../utils/actions";

const ProductsReducer = (state, action) => {
    switch (action.type) {
        case SIDEBAR_OPEN:
            return { ...state, isSidebarOpen: true}
        case SIDEBAR_CLOSE:
            return { ...state, isSidebarOpen: false}
        case GET_PRODUCTS_BEGIN:
            return { ...state, productsLoading: true }
        case GET_PRODUCTS_SUCCESS:
            const featureProducts = action.payload.filter((product) => product.featured === true);
            return { 
                ...state, 
                productsLoading: false,
                productsError: false, 
                products: action.payload, 
                featureProducts: featureProducts
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                productsLoading: false,
                productsError: true
            }
        case GET_SINGLE_PRODUCT_BEGIN:
            return {
                ...state,
                singleProductLoading: true,
                singleProductError: false
            }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                singleProductLoading: false,
                singleProductError: false,
                singleProduct: action.payload
            }
        case GET_SINGLE_PRODUCT_ERROR:
            return {
                ...state,
                singleProductLoading: false,
                singleProductError: true
            } 
        default:
            throw new Error(`No Matching "${action.type}" - action type`)
    }
}

export default ProductsReducer;