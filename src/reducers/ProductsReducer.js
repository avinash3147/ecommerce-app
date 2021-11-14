import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../utils/actions";

const ProductsReducer = (state, action) => {
    switch (action.type) {
        case SIDEBAR_OPEN:
            return { ...state, isSidebarOpen: true}
        case SIDEBAR_CLOSE:
            return { ...state, isSidebarOpen: false}
        default:
            throw new Error(`No Matching "${action.type}" - action type`)
    }
}

export default ProductsReducer;