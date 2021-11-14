import styled from "styled-components";
import { Link } from 'react-router-dom';

import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'

const Hero = () => {
    return (
        <Wrapper className='section-center'>
            <article className='content'>
                <h1>
                    design your <br />
                    comfort zone
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
                    sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
                    aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
                    alias?
                </p>
                <Link to='/products' className='btn home-btn'>
                    shop now
                </Link>
            </article>

            <article className='img-container'>
                <img src={heroBcg} alt='nice table' className='main-img' />
                <img src={heroBcg2} alt='person working' className='second-img' />
            </article>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: grid;
    align-items: center;
    justify-content: center;
    min-height: 60vh;

    .img-container {
        display: none
    }

    p {
        line-height: 2;
        max-width: 45em;
        margin-bottom: 2rem;
        color: var(--clr-grey-5);
        font-size: 1rem;
    }

    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
        height: calc(100vh - 5rem);
        gap: 8rem;

        h1 {
            margin-bottom: 2rem;
        }

        p {
            font-size: 1.25rem;
        }

        .hero-btn {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
        }

        .img-container {
            display: block;
            position: relative;
        }

        .main-img {
            width: 100%;
            height: 550px;
            display: block;
            object-fit: cover;
            border-radius: var(--radius);
            position: relative;
        }

        .second-img {
            position: absolute;
            width: 250px;
            bottom: 0;
            left: 0;
            border-radius: var(--radius);
            transform: translateX(-50%);
        }

        .img-container::before {
            content: '';
            position: absolute;
            width: 10%;
            height: 80%;
            background: var(--clr-primary-9);
            bottom: 0%;
            left: -8%;
            border-radius: var(--radius); 
        }
    }
`;

export default Hero;