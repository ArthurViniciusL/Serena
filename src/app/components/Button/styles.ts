import styled from "styled-components";

interface StyleProps {
    className: string;
    $bgColorHover?: string;
    $fontColorHover?: string;
}

/* O componente inverte as cores para ficar adequado a tema de cores do usuário */

const StyledButton = styled.button<StyleProps>`
    &:hover {
        color:  ${({ $bgColorHover }) => $bgColorHover};
        background-color: ${({ $fontColorHover }) => $fontColorHover};
    }
`;

export default StyledButton;
