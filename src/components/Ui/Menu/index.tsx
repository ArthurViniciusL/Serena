"use client";

import "./Menu-styles.css";

interface MenuProps {
    children: React.ReactNode;
}

export function Menu({ children }: MenuProps) {
    return (
        <div className="menu-box">
            <div className="menu-box__content">{children}</div>
        </div>
    );
}
