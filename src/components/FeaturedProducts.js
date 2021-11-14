import { Link } from "react-router-dom";
import styled from "styled-components";

const FeaturedProducts = () => {
    return (
        <Wrapper className='section'>
            <div className='title'>
                <h1>Feature Products</h1>
                <div className='underline'></div>
            </div>  
            
            <div className='featured'>
kjnk
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
        magin: 4rem auto;
    }

    .btn {
        display: block;
        width: 148px;
        margin: 0 auto;
        text-align: center;
    }
`;

export default FeaturedProducts;