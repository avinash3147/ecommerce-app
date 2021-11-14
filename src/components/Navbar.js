import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import { links } from '../utils/constants';
import { CartButtons } from '.';
import { useProductsContext } from '../context/ProductContext';

const Navbar = () => {

    const {openSidebar} = useProductsContext()

    return (
        <NavConatiner>
            <div className='nav-container'>
                <div className='nav-header'>
                    <img src={logo} alt='comfy store' />
                    <button className='nav-toggle'>
                        <FaBars onClick={openSidebar} />
                    </button>
                </div>

                <ul className='nav-links'>
                    {
                        links.map((link) => {
                            const { id, text, url } = link;
                            return (
                                <li key={id}>
                                    <Link to={url}>{text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

                <CartButtons />
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

        .nav-header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            img {
                width: 175px;
                margin-left: -15px;
            }

            .nav-toggle {
                background: transparent;
                border: transparent;
                color: var(--clr-primary-5);
                cursor: pointer;

                svg {
                    font-size: 2rem;
                }
            }
        }

        .nav-links {
            display: none;
        }

        .cart-btn-wrapper {
            display: none;
        }
    }

    @media (min-width: 992px) {
        .nav-container {
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
            
            .nav-header {

                .nav-toggle {
                    display: none;
                }
            }

            .nav-links {
                display: flex;
                justify-content: center;

                li {
                    margin: 0 0.5rem;
                }

                a {
                    color: var(--clr-grey-3);
                    text-transform: capitalize;
                    letter-spacing: var(--spacing);
                    padding: 0.5rem;
                    font-size: 1rem;

                    &:hover {
                        border-bottom: 2px solid var(--clr-primary-7);
                    }
                }
            }

            .cart-btn-wrapper {
                display: grid;
            }
        }
    }
`;

export default Navbar;