import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const AmountButtons = ({ amount, increase, decrease }) => {
    return (
        <Wrapper>
            <button 
                type='button' 
                className='amount-btn'
                onClick={decrease}    
            >
                <FaMinus />
            </button>

            <h2 className='amount'>{amount}</h2>

            <button 
                type='button' 
                className='amount-btn'
                onClick={increase}    
            >
                <FaPlus />
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: grid;
    width: 140px;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;

    .amount-btn {
        background: transparent;
        border: none;
        cursor: pointer;
        width: 2rem;
        height: 1rem;
        display: flex;
        align-items:center;
        justify-content: center;
        padding: 1rem 0;
    }

    h2 {
        margin-bottom: 0;
    }
`;

export default AmountButtons;