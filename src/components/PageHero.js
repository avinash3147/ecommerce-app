import styled from "styled-components";
import { Link } from 'react-router-dom'

const PageHero = ({ title }) => {
    return (
        <Wrapper>
            <div className='section-center'>
                <h3>
                    <Link to='/'>Home</Link> /
                    {title}
                </h3>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background: var(--clr-primary-10);
    min-height: 20vh;
    display: flex;
    align-items: center;
    width: 100%;
    
    color: var(--clr-primary-1);

    a {
        color: var(--clr-primary-3);
        padding: 0.5rem;
        transition: var(--transition);

        &:hover {
            color: var(--clr-primary-1);
        }
    }
`;

export default PageHero;