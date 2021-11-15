import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Rating = ({ stars, reviews }) => {

    const tempStars = Array.from({length: 5}, (_, index) => {
        const number = index + 0.5;
        return (
            <span key={index}>
                {
                    stars > number ? <BsStarFill /> : 
                    stars > index ? <BsStarHalf /> : 
                    <BsStar />
                }
            </span>
        )
    });

    return (
        <Wrapper>
            <div className='stars'>{tempStars}</div>
            <p className='reviews'>({reviews} customer reviews)</p>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    align-items: center;

    span {
        color: #ffb900;
        margin-right: 0.25rem;
        font-size: 1rem;
    }

    p {
        margin-bottom: 0;
        margin-left: 0.5rem;
    }

    margin-bottom: 0.5rem;
`;

export default Rating;