import styled from "styled-components";
import { FaCheck } from 'react-icons/fa';

import { useFilterContext } from "../context/FilterContext";
import { getUniqueValues } from "../utils/helper";

const Filters = () => {

    const {
        filters: {
            searchQuery,
            category,
            company,
            color,
            price,
            freeShipping
        },
        allProducts,
        updateFilters
    } = useFilterContext();

    const categories = getUniqueValues(allProducts, 'category')
    const companies = getUniqueValues(allProducts, 'company')
    const colors = getUniqueValues(allProducts, 'colors')

    // console.log(companies);

    return (
        <main>
            <Wrapper>
                <div className='content'>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className='form-control'>
                            <input
                                type='text'
                                placeholder='search'
                                name='searchQuery'
                                className='search-input'
                                value={searchQuery}
                                onChange={updateFilters}
                            />
                        </div>

                        <div className='form-control'>
                            <h5>Category</h5>
                            <div>
                                {
                                    categories.map((c, index) => {
                                        return (
                                            <button
                                                type='button'
                                                key={index}
                                                name='category'
                                                value={category}
                                                onClick={updateFilters}
                                                className={
                                                    `${category === c.toLowerCase() ? 'active' : null}`
                                                }
                                            >
                                                {c}
                                            </button>
                                        )
                                    })
                                }
                            </div>

                            {/* Company */}
                            <div className='form-control'>
                                <h5>Company</h5>
                                <select
                                    name='company'
                                    value={company}
                                    onChange={updateFilters}
                                    className='company'
                                >
                                    {
                                        companies.map((comp, index) => {
                                            return (
                                                <option key={index} value={comp}>{comp}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            {/* End Company */}

                            {/* Start Colors */}
                            <div className='form-control'>
                                <h5>Colors</h5>
                                <div className='colors-container'>
                                    {
                                        colors.map((c, index) => {
                                            return <button 
                                                key={index}
                                                style={{ background: c}}
                                                name='color'
                                                value={c}
                                                onClick={updateFilters}
                                                data-color={c}
                                                className={
                                                    `${color === c ? 'colors-btn' : 'colors-btn'}`
                                                }
                                            >
                                                { color === c ? <FaCheck /> : null}
                                            </button>
                                        })
                                    }
                                </div>
                            </div>
                            {/* End Colors */}
                        </div>
                    </form>
                </div>
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.section`
    .form-control {
        margin-bottom: 1.25rem;

        h5 {
            margin-bottom: 0.5rem;
        }
    }
    .search-input {
        border: transparent;
        padding: 0.5rem;
        background: var(--clr-grey-10);
        border-radius: var(--radius);
        letter-spacing: var(--spacing);
        outline: none;

        &::placeholder {
            text-transform: capitalize;
        }
    }

    button {
        background: transparent;
        border: none;
        display: flex;
        text-transform: capitalize;
        cursor: pointer;
        color: var(--clr-grey-5);
        letter-spacing: var(--spacing);
        padding: 0.25rem 0;
        margin: 0.25rem 0;
        border-bottom: 1px solid transparent;

        .active {
            border-color: black;
        }
    }

    .company {
        border: transparent;
        background: var(--clr-grey-10);
        padding: 0.25rem;
        border-radius: var(--radius);
    }

    .colors-container {
        display: flex;

        .colors-btn {
            border-radius: var(--radius);
            background: #222;
            opacity: 0.5;

            svg {
                font-size: 0.5rem;
                color: var(--clr-white);
            }
        }
    }
`;

export default Filters;