import { Link } from "react-router-dom";
import styled from "styled-components";

import { Error } from "../pages";
import { useProductsContext } from "../context/ProductContext";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {

    const { 
        featureProducts, 
        productsLoading: loading, 
        productsError: error 
    } = useProductsContext()

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <Wrapper className='section'>
            <div className='title'>
                <h1>Feature Products</h1>
                <div className='underline'></div>
            </div>  
            
            <div className='section-center featured'>
                {
                    featureProducts.slice(0, 3).map((featureProduct) => {
                        return <Product key={featureProduct.id}  {...featureProduct} />
                    })
                }
            </div>
            
            <Link to='/products' className='btn'>
                All Products
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background: var(--clr-grey-10);

    .featured {
        margin: 4rem auto;
        display: grid;
        gap: 2.5rem;

        img {
            height: 225px;
        }
    }

    .btn {
        display: block;
        width: 148px;
        margin: 0 auto;
        text-align: center;
    }

    @media (min-width: 576px) {
        .featured {
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }
`;

export default FeaturedProducts;