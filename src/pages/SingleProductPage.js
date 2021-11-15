import { useEffect } from 'react'
import styled from 'styled-components';
import { useParams, useHistory } from "react-router";
import { Error } from ".";
import { Loading, PageHero } from "../components";
import { useProductsContext } from "../context/ProductContext";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from '../utils/helper';
import ProductImages from '../components/ProductImages';

const SingleProductPage = () => {

    const { id } = useParams()
    const history = useHistory()

    const { 
        singleProductLoading: loading,
        singleProductError: error,
        singleProduct: product,
        fetchSingleProduct 
    } = useProductsContext()

    useEffect(() => {
        fetchSingleProduct(`${url}${id}`)
    }, [id])

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                history.push('/')
            }, 3000)
        }
    }, [error])

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    const {
        name,
        price,
        description,
        stock,
        stars,
        reviews,
        id: sku,
        company,
        images,
    } = product

    return (
        <Wrapper>
            <PageHero title={name} product/>
            <div className='section section-center page'>
                <button className='btn'>Back to products</button>
                <div className='product-center'>
                    <ProductImages images={images} />
                    <section>
                        <h2>{name}</h2>
                        <h5 className='price'>{formatPrice(price)}</h5>
                        <p className='desc'>{description}</p>
                        <p className='info'>
                            <span>Available: </span>
                            {
                                stock > 0 ? 'In Stock' : 'Out of Stock'
                            }
                        </p>
                        <p className='info'>
                            <span>SKU: </span>
                            {sku}
                        </p>
                        <p className='info'>
                            <span>Brand: </span>
                            {company}
                        </p>
                        <hr />
                        { stock > 0 && <button className='btn'>Add To Cart</button> }
                    </section>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .product-center {
        display: grid;
        // align-items: center;
        gap: 4rem;
        margin-top: 2rem;
    }

    .price {
        color: var(--clr-primary-5);
    }

    .desc {
        line-height: 2;
        max-width: 45rem;
    }

    .info {
        text-transform: capitalize;
        display: grid;
        grid-template-columns: 125px 1fr;
        width: 300px;
        span {
            font-weight: 700;
        }
    }

    @media (min-width: 992px) {
        .product-center {
            grid-template-columns: 1fr 1fr;
            align-items: center;
        }
        
        .price {
            font-size: 1.25rem;
        }
    }
`;

export default SingleProductPage;