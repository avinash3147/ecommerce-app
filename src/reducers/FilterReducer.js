import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW } from "../utils/actions";

const FilterReducer = (state, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                filteredProducts: [...action.payload],
                allProducts: [...action.payload]
            }   
        case SET_GRIDVIEW:
            return {
                ...state,
                gridView: true
            }
        case SET_LISTVIEW:
            return {
                ...state,
                gridView: false
            }
        default:
            throw new Error(`No Matching "${action.type}" - action type`)
    }
}

export default FilterReducer;