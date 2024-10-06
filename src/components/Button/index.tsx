"use client";

import "./button_styles.css";
import StyledButton from "./styles";

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    isActive?: boolean;
    border?: boolean;
    bgColor?: string;
    bgColorHover?: string;
    fontColorHover?: string;
}

export function Button({
    onClick,
    children,
    className,
    isActive,
    bgColor,
    bgColorHover,
    fontColorHover,
}: ButtonProps) {
    // const borderButton = border ? "solid var(--bg-color-05) 1px" : "none";

    const activeButton = isActive ? "serena-button-active" : "";

    return (
        <StyledButton
            onClick={onClick}
            className={`serena-button ${className}`}
            $bgColor={bgColor}
            $bgColorHover={bgColorHover}
            $fontColorHover={fontColorHover}
        >
            {children}
        </StyledButton>
    );
}
