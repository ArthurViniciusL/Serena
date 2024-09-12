"use client";

import StyledButton from "./styles";

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    bgColorHover?: string;
    fontColorHover?: string;
}

export function Button({
    onClick,
    className,
    children,
    bgColorHover,
    fontColorHover,
}: ButtonProps) {
    return (
        <StyledButton
            className={`app-button ${className}`}
            onClick={onClick}
            $bgColorHover={bgColorHover}
            $fontColorHover={fontColorHover}
        >
            {children}
        </StyledButton>
    );
}
