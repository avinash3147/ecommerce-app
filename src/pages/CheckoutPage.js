import styled from "styled-components";
import { PageHero } from "../components";

const CheckoutPage = () => {
    return (
        <main>
            <PageHero title='Checkout'/>
            <Wrapper className='page'>
                <h4>Checkout Page</h4>
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.section`

`;

export default CheckoutPage;