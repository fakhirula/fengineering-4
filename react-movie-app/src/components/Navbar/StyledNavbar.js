import styled from 'styled-components';

const StyledNavbar = styled.div`
    background-color: #221f1f;
    padding: 1rem;
    color: #fff;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);

    nav {
        display: flex;
        flex-direction: column;
    }

    div {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
    }

    li {
        margin-bottom: 1rem;
        cursor: pointer;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        nav {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: +0.5rem;
        }

        div {
            font-size: 1rem;
            margin-bottom: 0;
        }

        ul {
            flex-direction: row;
        }

        li {
            margin: 0 1rem;
            transition: all 0.3s ease-in-out;
        }

        li:hover {
            color: #b81d24;
            transition: all 0.3s ease-in-out;
        }
    }
`;

export default StyledNavbar;
