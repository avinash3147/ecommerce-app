import styled from "styled-components";

import { services } from "../utils/constants";

const Services = () => {
    return (
        <Wrapper>
            <div className='section-center'>
                <article className='header'>
                    <h3>
                        Custom Furniture <br />
                        built only for you
                    </h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                        dolorum debitis consectetur reprehenderit non aliquam voluptates
                        dolore aut vero consequuntur.
                    </p>
                </article>
                <article className='service-center'>
                    {
                        services.map((service) => {
                            const { id, icon, title, text } = service;
                            return (
                                <article className='service' key={id}>
                                    <span className='icon'>{icon}</span>
                                    <h4>{title}</h4>
                                    <p>{text}</p>
                                </article>
                            )
                        })
                    }
                </article>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background: var(--clr-primary-10);
    padding: 5rem 0;

    h3,
    h4 {
        text-transform: capitalize;
        color: var(--clr-primary-1);
    }

    .header h3 {
        margin-bottom: 2rem;
    }

    p {
        margin-bottom: 0;
        line-height: 1.8;
        color: var(--clr-primary-3);
    }

    .service-center {
        margin-top: 4rem;
        display: grid;
        gap: 2.5rem;

        .service {
            text-align: center;
            background: var(--clr-primary-7);
            border-radius: var(--radius);
            padding: 2.5rem 2rem;

            p {
                color: var(--clr-primary-2);
            }

            span {
                background: var(--clr-primary-10);
                color: var(--clr-primary-1);
                margin: 0 auto;
                width: 4rem;
                height: 4rem;
                display: grid;
                border-radius: 50%;
                place-items: center;
                margin-bottom: 1rem;

                svg {
                    font-size: 2rem;
                }
            }
        }
    }

    @media (min-width: 992px) {
        .header {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (min-width: 576px) {
        .service-center {
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }
    }

    @media (min-width: 1280px) {
        padding: 0;
        .section-center {
            transform: translateY(5rem);
        }
    }
`;

export default Services;