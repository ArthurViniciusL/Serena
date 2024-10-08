"use client";
import { AlignJustify, X } from "lucide-react";
import menu from "./Menu.module.css"
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { IconClose, IconMobileMenu } from "@/modules/app.modules";
import { useScreen } from "@/hooks/useScreen";

interface MenuProps {
    children: React.ReactNode;
}

export function Menu({ children }: MenuProps) {

    const { screen } = useScreen();

    // const [screen, setScreen] = useState<number>(0);
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

/*     useEffect(() => {
        function updateScreenSize() {
            setScreen(window.innerWidth);
            // console.log(`Nova largura da tela: ${screen}px`);
        }
        window.addEventListener('resize', updateScreenSize);
    }); */

    function handleMenuIsClick() {
        setMenuIsOpen(!menuIsOpen)
    }

    if (screen >= 770) {
        return (
            <>
                <nav className={menu.content}>
                    {children}
                </nav>
            </>
        )
    }

    else {
        return (
            <>
                {/* é provisório ok, isso vai virar um outro componente chamado "MobileMenu" que carrega um children */}


                {
                    menuIsOpen ?
                        <main className={menu.mobile}>
                            <span className={menu.closeContent}>
                                <Button onClick={handleMenuIsClick}>
                                    <IconClose size={20} />
                                </Button>
                            </span>
                            <nav className={''}>
                                {children}
                            </nav>
                        </main>

                        :

                        <Button onClick={handleMenuIsClick}>
                            <IconMobileMenu size={20} />
                        </Button>
                }
            </>
        );
    }
}
