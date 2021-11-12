import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import { links } from '../utils/constants';

const Navbar = () => {
    return (
        <NavConatiner>
            <div className='nav-container'>
                <div className='nav-header'>

                    <Link to='/'>
                        <img src={logo} alt='comfy sloth' />
                    </Link>

                    <button type='button' className='nav-toggle'>
                        <FaBars />
                    </button>
                </div>

                <ul className='nav-links'>
                    {
                        links.map((link) => {
                            const { id, text, url } = link
                            return (
                                <li key={id}>
                                    <Link to={url}>{text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </NavConatiner>
    )
}

const NavConatiner = styled.nav`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .nav-container {
        width: 90vw;
        max-width: var(--max-width);
        margin: 0 auto;
    }

    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
            width: 175px;
            margin-left: -15px;
        }
    }

    .nav-toggle {
        background: transparent;
        border: none;
        color: var(--clr-primary-5);
        cursor: pointer;
        
        svg {
            font-size: 2rem;
        }
    }

    .nav-links {
        display: none;
    }

    @media (min-width: 992px) {
        .nav-container {
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
        }

        .nav-links {
            display: flex;
            align-items: center;
            justify-content: center;

            li {
                margin: 0 0.5rem;
            }

            a {
                text-transform: capitalize;
                color: var(--clr-grey-3);
                font-size: 1rem;
                letter-spacing: var(--spacing);
                padding: 0.5rem;

                &:hover {
                    border-bottom: 2px solid var(--clr-primary-7);
                }
            }
        }

        .nav-toggle {
            display: none
        }
    }
`;

export default Navbar;