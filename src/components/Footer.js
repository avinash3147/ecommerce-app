import styled from "styled-components";

const Footer = () => {
    return (
        <Wrapper>
            <h5>
                &copy; {new Date().getFullYear()}
                <span>comfy sloth</span>    
            </h5>

            <h5>
                All rights reserved
            </h5>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    height: 5rem;
    background: var(--clr-black);
    color: var(--clr-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    span {
        color: var(--clr-primary-5);
    }

    h5 {
        margin: 0.1rem;
        font-weight: 400;
        line-height: 1.25;
        text-transform: none;
    }

    @media (min-width: 776px) {
        flex-direction: row;
    }
`;

export default Footer;