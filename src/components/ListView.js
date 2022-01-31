import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatPrice } from "../utils/helper";

const ListView = ({ products }) => {
    return (
        <Wrapper>
            {
                products.map((product) => {
                    const { id, image, name, price, description } = product
                    return (
                        <article key={id}>
                            <img src={image} alt={name} />
                            <div>
                                <h4>{name}</h4>
                                <p className='price'>{formatPrice(price)}</p>
                                <p>{description.substring(0, 150)}...</p>
                                <Link to={`/product/${id}`} className='btn'>
                                    Details
                                </Link>
                            </div>
                        </article>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: grid;
    gap: 3rem;
    
    img {
        height: 220px;
        width: 330px;
        width: 100%;
        display: block;
        object-fit: cover;
        margin-bottom: 1rem;
        border-radius: var(--radius);
    }

    h4 {
        margin-bottom: 0.5rem;
    }

    .price {
        color: var(--clr-primary-6);
    }

    p {
        max-width: 45em;
        margin-bottom: 1rem;
    }

    .btn {
        font-size: 0.5rem;
        padding: 0.25rem 0.5rem;
    }

    @media (min-width: 992px) {
        article {
            display: grid;
            grid-template-columns: auto 1fr;
            column-gap: 2rem;
            align-items: center;
        }
    }
`;

export default ListView;