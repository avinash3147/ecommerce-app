import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {

    const { id, stock, colors } = product;
    const [mainColor, setMainColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const increase = () => {
        setAmount((oldAmount) => {
            let newAmount = oldAmount + 1;
            if (newAmount > stock) {
                newAmount = stock
            }
            return newAmount;
        })
    }

    const decrease = () => {
        setAmount((oldAmount) => {
            let newAmount = oldAmount - 1;
            if (newAmount < 1) {
                newAmount = 1;
            }
            return newAmount;
        })
    }

    return (
        <Wrapper>
            <div className='colors'>
                <span>Colors: </span>
                <div>
                    {
                        colors.map((color, index) => {
                            return (
                                <button
                                    key={index}
                                    style={{ background: color }}
                                    className={`${mainColor === color ? 'color-btn active' : 'color-btn'}`}
                                    onClick={() => setMainColor(color)}
                                >
                                    { mainColor === color ? <FaCheck /> : null }
                                </button>
                            )
                        })
                    }
                </div>

                <div className='btn-container'>
                    <AmountButtons amount={amount} increase={increase} decrease={decrease} />
                    <Link to='cart' className='btn'>add to cart</Link>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: 2rem;
    .colors {
        display: grid;
        grid-template-columns: 125px 1fr;
        align-items: center;
        margin-bottom: 1rem;

        span {
            text-transform: capitalize;
            font-weight: 700;
        }

        div {
            display: flex;
        }
    }

    .color-btn {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.5;
        cursor: pointer;
        border: none;
        margin-right: 0.5rem;
        background: #222;
        display: inline-block;
        
        svg {
            color: white;
            font-size: 0.75rem;
        }
    }

    .active {
        opacity: 1;
    }

    .btn-container {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
    }

    .btn {
        margin-top: 1rem;
        width: 140px;
        letter-spacing: 0;
    }
`;

export default AddToCart;