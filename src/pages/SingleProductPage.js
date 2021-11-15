import { useEffect } from 'react'
import styled from 'styled-components';
import { useParams, useHistory } from "react-router";
import { Error } from ".";
import { Loading, PageHero } from "../components";
import { useProductsContext } from "../context/ProductContext";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from '../utils/helper';
import ProductImages from '../components/ProductImages';
import { Link } from 'react-router-dom';
import AddToCart from '../components/AddToCart';
import Rating from '../components/Rating';

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
        return <Loading className='page'/>
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
                <Link to='/products' className='btn'>Back to products</Link>
                <div className='product-center'>
                    <ProductImages images={images} />
                    <section>
                        <h2>{name}</h2>
                        <Rating stars={stars} reviews={reviews} />
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
                        { stock > 0 && <AddToCart product={product} /> }
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