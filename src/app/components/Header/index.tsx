"use client";

import "@/app/components/Header/header_styles.css";

interface HeaderProps {
    colorFill: string;
    children: React.ReactNode;
}

export function Header({ colorFill, children }: HeaderProps) {
    return (
        <header className="header-box" >
            <div className="header-box__content " style={{ backgroundColor: colorFill }}>{children}</div>
        </header>
    );
}
