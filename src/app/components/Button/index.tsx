"use client";

import { useButtonState } from "@/app/hooks/useButtonState";
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
    border,
    bgColor,
    bgColorHover,
    fontColorHover,
}: ButtonProps) {
    const borderButton = border ? "solid var(--bg-color-05) 1px" : "none";
    
    const activeButton = isActive ? "app-button-active" : "";

    return (
        <StyledButton
            onClick={onClick}
            className={`app-button ${activeButton} ${className}`}
            $border={borderButton}
            $bgColor={bgColor}
            $bgColorHover={bgColorHover}
            $fontColorHover={fontColorHover}
        >
            {children}
        </StyledButton>
    );
}
