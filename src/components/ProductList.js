import { ListView } from ".";
import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";

const ProductList = () => {

    const { filteredProducts: products, gridView } = useFilterContext();

    if (products.length < 1) {
        return (
            <h5 style={{ textTransform: 'none' }}>
                Sorry, no products matched your search.
            </h5>
        )
    }

    if (gridView) {
        return <GridView products={products} />
    }
    return <ListView products={products} />
}

export default ProductList;