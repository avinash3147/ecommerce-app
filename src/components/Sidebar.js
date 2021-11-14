import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from '../assets/logo.svg';
import { links } from "../utils/constants";
import { CartButtons } from '.';
import { useProductsContext } from "../context/ProductContext";

const Sidebar = () => {

    const { isSidebarOpen, closeSidebar } = useProductsContext()

    return (
        <SidebarComponent>
            <aside 
                className={ `${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}` }>

                <div className='sidebar-header'>
                    <img src={logo} className='logo' alt='comfy store' />
                    <button className='close-btn'>
                        <FaTimes onClick={closeSidebar} />
                    </button>
                </div>

                <ul className='links'>
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
            </aside>
        </SidebarComponent>
    )
}

const SidebarComponent = styled.div`
    text-align: center;

    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--clr-white);
        transition: var(--transition);
        z-index: -1;
        transform: translate(-100%);
    }

    .show-sidebar {
        transform: translate(0);
        z-index: 999;
    }

    .sidebar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 1.5rem;

        .logo {
            height: 45px;
            justify-self: center;
        }

        .close-btn {
            border: none;
            background: transparent;
            cursor: pointer;
            font-size: 2rem;
            color: var(--clr-red-dark);
            margin-top: 0.2rem;
            transition: var(--transition);

            &:hover {
                color: var(--clr-red-light);
            }
        }
    }

    .links {
        margin-bottom: 2rem;
        
        a {
            display: block;
            text-align: left;
            text-transform: capitalize;
            padding: 1rem 1.5rem;
            letter-spacing: var(--spacing);
            transition: var(--transition);
            color: var(--clr-grey-3);
            font-size: 1rem;

            &:hover {
                background: var(--clr-grey-10);
                color: var(--clr-grey-2);
                // padding: 1rem 1.5rem;
                padding-left: 2rem;
            }
        }
    }

    .cart-btn-wrapper {
        margin: 2rem auto;
    }

    @media screen and (min-width: 992px) {
        .sidebar {
            display: none;
        }
    }
`;
export default Sidebar;