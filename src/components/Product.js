import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { formatPrice } from "../utils/helper";

const Product = ({ image, name, price, id }) => {
    return (
        <Wrapper>
            <div className='container'>
                <img src={image} alt={name} />
                <Link to={`/product/${id}`} className='link'>
                    <FaSearch />
                </Link>
            </div>
            <footer>
                <h5>{name}</h5>
                <p>{formatPrice(price)}</p>
            </footer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .container {
        position: relative;
        background: var(--clr-black);
        border-radius: var(--radius);

        img {
            display: block;
            object-fit: cover;
            width: 100%;
            border-radius: var(--radius);
            transition: var(--transition);
        }

        .link {
            position: absolute;
            top: 50%;
            left: 50%;
            opacity: 0;
            background: var(--clr-primary-5);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2.5rem;
            height: 2.5rem;
            cursor: pointer;
            transition: var(--transition);
            transform: translate(-50%, -50%);

            svg {
                color: var(--clr-white);
                font-size: 1.25rem;
            }
        }

        &:hover img {
            opacity: 0.5;
        }

        &:hover .link {
            opacity: 1;
        }
    }

    footer {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    footer h5,
    footer p {
        margin-bottom: 0;
        font-weight: 400;
    }

    footer p {
        letter-spacing: var(--spacing);
        color: var(--clr-primary-5);
    }
`;

export default Product;