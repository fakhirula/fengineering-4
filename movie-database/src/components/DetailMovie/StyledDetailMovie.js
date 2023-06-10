import styled from 'styled-components';

const StyledDetailMovie = styled.div`
    /* Small Screen */
    .container {
        margin: 1rem;
    }

    .hero {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .hero__left {
        margin-bottom: 1rem;
    }

    h2 {
        color: #e50914;
        margin-bottom: 1rem;
        font-size: 3rem;
    }

    h3 {
        color: #b81d24;
        margin-bottom: 1rem;
        font-size: 1.59rem;
    }

    p {
        color: #f5f5f1;
        margin-bottom: 1rem;
    }

    .hero__button {
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 10px;
        background-color: #e50914;
        color: #f5f5f1;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .hero__button:hover {
        background-color: #b81d24;
        transition: all 0.3s ease-in-out;
    }

    .hero__image {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    /* Large Screen */
    @media (min-width: 992px) {
        position: relative;

        .hero__bgimage {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(https://raw.githubusercontent.com/hudsonmarinho/header-and-footer-parallax-effect/master/assets/images/bg-header.jpg)
            no-repeat 50% 50%;
        filter: blur(100px);
        z-index: -1;
        }

        .container {
        max-width: 1200px;
        margin: 0 auto 3rem;
        padding: 6rem 0;
        }

        .hero {
        margin: 0 1rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        }

        .hero__left {
        flex-basis: 50%;
        }
    }
`;

export default StyledDetailMovie;
