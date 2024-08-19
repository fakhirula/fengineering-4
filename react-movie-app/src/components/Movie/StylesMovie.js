import styled from 'styled-components';

const StyledMovie = styled.div`
    margin-bottom: 1rem;

    a {
        text-decoration-color: #e50914;
    }

    img {
        border-radius: 25px;
        max-width: 100%;
        height: auto;
    }

    h3 {
        color: #e50914;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    p {
        color: #64748b;
    }

    @media (min-width: 768px) {
        img {
            flex-basis: 50%;
        }
    }

    /* Large Screen */
    @media (min-width: 992px) {
        img {
            flex-basis: 25%;
            padding: 1rem;
        }
    }
`;

export default StyledMovie;
