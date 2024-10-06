import "./button_styles.css";
import styled from "styled-components";

interface StyleProps {
    className: string;
    $bgColor?: string;
    $bgColorHover?: string;
    $fontColorHover?: string;
}

/* O componente inverte as cores para ficar adequado a tema de cores do usuário */

const StyledButton = styled.button<StyleProps>`
    background-color: ${({ $bgColor }) => $bgColor};
    &:hover {
        color: ${({ $fontColorHover }) => $fontColorHover};
        background-color: ${({ $bgColorHover }) => $bgColorHover};
    }
`;

export default StyledButton;
