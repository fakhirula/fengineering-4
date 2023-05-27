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
    background-color: #e50914;
    color: #f5f5f1;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    background-color: ${function (props) {
        if (props) {
            return props.theme.colors[props.variant];
        } else {
            return props.theme.colors.primary;
        }
    }};
    
    ${function (props) {
    return props.full && css`
        width: 100%;
        display: block;`
    }};
    
    &:hover {
        background-color: #b81d24;
        transition: all 0.3s ease-in-out;
    }
`;

export default Button;