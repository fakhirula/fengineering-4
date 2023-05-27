import styled from 'styled-components';

const StyledFooter = styled.div`
    background-color: #B81D24;
    color: #fff;
    padding: 1rem;
    text-align: center;

    h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
    }

    /* Large Screen */
    @media (min-width: 992px) {
        padding: 1.5rem;

        footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        h2, p {
            margin-bottom: 0;
        }
    }
`;

export default StyledFooter;