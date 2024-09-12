'use client';

import StyledButton from "./styles";

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;

    bgColorHover?: string;
    fontColorHover?: string;
}

export function Button({
    onClick,
    children,
    bgColorHover,
    fontColorHover,
}: ButtonProps) {
    return (
        <StyledButton
            className="app-button"
            onClick={onClick}
            $bgColorHover={bgColorHover}
            $fontColorHover={fontColorHover}
        >
            {children}
        </StyledButton>
    );
}
