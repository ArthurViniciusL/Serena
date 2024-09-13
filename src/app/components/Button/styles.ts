import "./button_styles.css";
import styled from "styled-components";

interface StyleProps {
    className: string;
    $border?: string;
    $bgColorHover?: string;
    $fontColorHover?: string;
}

/* O componente inverte as cores para ficar adequado a tema de cores do usuário */

const StyledButton = styled.button<StyleProps>`
    border: ${({ $border }) => $border};
    &:hover {
        color: ${({ $fontColorHover }) => $fontColorHover};
        background-color: ${({ $bgColorHover }) => $bgColorHover};
    }
`;

export default StyledButton;
