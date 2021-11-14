import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartButtons = () => {
    return (
        <Wrapper className='cart-btn-wrapper' >
            <Link to='/cart' className='cart-btn'>
                Cart 
                <span className='cart-container'>
                    <FaShoppingCart />
                    <span className='cart-value'>
                        10
                    </span>
                </span>
            </Link>

            <button type='button' className='auth-btn'>
                Login <FaUserPlus />
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-item: center;
    width: 225px;

    .cart-btn {
        color: var(--clr-grey-1);
        font-size: 1.5rem
        letter-spacing: var(--spacing);

        display: flex;
        align-items: center;
    }

    .cart-container {
        position: relative;
        display: flex;
        align-items: center;

        svg {
            height: 1.6rem;
            margin-left: 5px;
        }

        .cart-value {
            position: absolute;
            top: -10px;
            right: -16px;
            background: var(--clr-primary-5);
            border-radius: 50%;
            padding: 12px;
            width: 16px;
            height: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.75rem;
        }
    }

    .auth-btn {
        background: transparent;
        border: transparent;
        display: flex;
        align-items: center;
        color: var(--clr-grey-1);
        font-size: 1.5rem
        letter-spacing: var(--spacing);
        cursor: pointer;
        
        svg {
            margin-left: 5px;
        }
    }
`;

export default CartButtons;
