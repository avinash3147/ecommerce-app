import { useState } from "react";
import styled from "styled-components";

const ProductImages = ({ images = [[]] }) => {

    const [mainImage, setMainImage] = useState(images[0])

    return(
        <Wrapper>
            <img src={mainImage.url} className='main-image' />
            <div className='gallery'>
                {
                    images.map((image, index) => {
                        return (
                            <img 
                                src={image.url}
                                alt=''
                                key={index}
                                className={`${image.url === mainImage.url} ? 'active' : null`}
                                onClick={() => setMainImage(images[index])}
                            />
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .main-image {
        height: 600px;
    }

    img {
        width: 100%;
        display: block;
        object-fit: cover;
        border-radius: var(--radius);
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 1rem;
        margin-top: 1rem;

        img {
            height: 100px;
            cursor: pointer;
        }
    }

    .active {
        border: 2px solid var(--clr-primary-5);
    }

    @media (max-width: 576px) {
        .main-image {
            height: 300px;
        }

        .gallery {
            img {
                height: 50px;
            }
        }
    }

    @media (min-width: 992px) {
        .main-image {
            height: 500px;
        }

        .gallery {
            img {
                height: 75px;
            }
        }
    }
`;

export default ProductImages;