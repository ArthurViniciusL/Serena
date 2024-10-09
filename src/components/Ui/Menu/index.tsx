"use client";
import { AlignJustify, X } from "lucide-react";
import menu from "./Menu.module.css";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { IconClose, IconMobileMenu } from "@/modules/app.modules";
import { useScreen } from "@/hooks/useScreen";

interface MenuProps {
    children: React.ReactNode;
}

export function Menu({ children }: MenuProps) {
    const { screen } = useScreen();
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    function handleMenuIsClick() {
        setMenuIsOpen(!menuIsOpen);
    }

    /* if (screen === 0) {
        return (
            <>
                <div className="skeleton h-12 w-24"></div>
                <div className="skeleton h-12 w-24"></div>
            </>
        )
    } */

    if (screen >= 770) {
        return (
            <>
                <nav className={menu.content}>{children}</nav>
            </>
        );
    } else {
        return (
            <>
                {menuIsOpen ? (
                    <aside className={menu.mobile}>
                        <header className={menu.closeContent}>
                            <Button onClick={handleMenuIsClick}>
                                <IconClose size={20} />
                            </Button>
                        </header>
                        <nav className={""}>{children}</nav>
                    </aside>
                ) : (
                    <Button onClick={handleMenuIsClick}>
                        <IconMobileMenu size={20} />
                    </Button>
                )}
            </>
        );
    }
}
