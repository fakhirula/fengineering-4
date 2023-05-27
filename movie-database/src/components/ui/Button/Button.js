import styled, {css} from "styled-components";

const colors = {
    primary: '#e50914',
    secondary: '#adb5bd',
    danger: '#dc3545',
    warning: '#ffc107',
    success: '#20c997',
    info: '#0dcaf0',
};

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: ${({ theme, variant }) =>
        variant ? theme.colors[variant] : theme.colors.primary};
    color: #f5f5f1;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-size: ${({ theme, size }) =>
        size ? theme.sizes[size] : theme.sizes.md};

    ${({ full }) =>
        full &&
        css`
        width: 100%;
        display: block;
        `}

    ${({ sm }) =>
        sm &&
        css`
        padding: 0.2rem 0.5rem;
        `}

    ${({ size, theme }) =>
        size &&
        css`
        padding: 0.5rem ${theme.sizes[size]};
        `}

    &:hover {
        background-color: #b81d24;
        transition: all 0.3s ease-in-out;
    }
`;

export default Button;