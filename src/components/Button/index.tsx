"use client";
import "./Button.css"
import StyledButton from "./styles";

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    
    border?: boolean,
    bgColor?: string;
    bgColorHover?: string;
    fontColorHover?: string;

    isActive?: boolean;
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

    const activeButton =isActive ? className = "serena-btn-active-black" : '';
    const activeBorder = border ? "solid 1px var(--bg-color-05)" : '';

    return (
        <StyledButton
            onClick={onClick}
            className={`serena-btn serena-bg-color-02 ${className} `}

            $border={activeBorder}
            $bgColor={`${bgColor}`}
            $bgColorHover={`${bgColorHover}`}
            $fontColorHover={`${fontColorHover}`}
        >
            {children}
        </StyledButton>
    );
}
