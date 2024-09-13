"use client";

import StyledButton from "./styles";

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    border?: boolean;
    bgColor?: string;
    bgColorHover?: string;
    fontColorHover?: string;
}

export function Button({
    onClick,
    children,
    className,
    border,
    bgColor,
    bgColorHover,
    fontColorHover,
}: ButtonProps) {
    const borderButton = border ? "solid var(--bg-color-05) 1px" : "none";
    return (
        <StyledButton
            onClick={onClick}
            className={`app-button ${className}`}
            $border={borderButton}
            $bgColor={bgColor}
            $bgColorHover={bgColorHover}
            $fontColorHover={fontColorHover}
        >
            {children}
        </StyledButton>
    );
}
