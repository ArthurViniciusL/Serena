"use client";

import style from "./Header.module.css";

interface HeaderProps {
    className?: string;
    children: React.ReactNode;
}

export function Header({ className, children }: HeaderProps) {
    return (
        <header className={style.container}>
            <section className={`${className} ${style.content}`}>
                {children}
            </section>
        </header>
    );
}
