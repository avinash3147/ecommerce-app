import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";
import { useFilterContext } from "../context/FilterContext";

const Sort = () => {

    const { 
        gridView, 
        setGridView, 
        setListView
    } = useFilterContext()

    return (
        <main>
            <Wrapper>
                <div className='btn-container'>
                    <button
                        onClick={setGridView}
                        className={`${gridView ? 'active': null}`}
                    >
                        <BsFillGridFill />
                    </button>
                    <button
                        onClick={setListView}
                        className={`${gridView ? null : 'active'}`}
                    >
                        <BsList />
                    </button>
                </div>
                <p>23 products found</p>
                <hr />
                <form>
                    <label>Sort By </label>
                    <select
                        name='sort'
                        id='sort'
                        className='sort-input'
                    >
                        <option value='price-lowest'>price (lowest)</option>
                        <option value='price-highest'>price (highest)</option>
                        <option value='name-a'>name (a - z)</option>
                        <option value='name-z'>name (z - a)</option>
                    </select>
                </form>
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    gap: 2rem;
    align-items: center;
    margin-bottom: 2rem;

    @media (max-width: 576px) {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 0.75rem;

        .btn-container {
            width: 50px;
        }
        label {
            display: inline-block;
            margin-right: 0.5rem;
        }
    }

    @media (min-width: 768px) {
        column-gap: 2rem;
    }

    .btn-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 0.5rem;

        button {
            background: transparent;
            border: 1px solid var(--clr-black);
            color: var(--clr-black);
            border-radius: var(--radius);
            width: 1.5rem;
            height: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            svg {
                font-size: 1rem;
            }
        }

        .active {
            background: var(--clr-black);
            color: var(--clr-white);
        }
    }

    p {
        text-transform: capitalize;
        margin-bottom: 0;
    }

    label {
        font-size: 1rem;
        text-transform: capitalize;
    }

    .sort-input {
        border: none;
        font-size: 1rem;
        text-transform: capitalize;
        padding: 0.25rem 0.5rem;
    }
`;

export default Sort;