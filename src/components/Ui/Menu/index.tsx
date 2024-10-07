"use client";
import { AlignJustify, X } from "lucide-react";
import menu from "./Menu.module.css"
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";

interface MenuProps {
    children: React.ReactNode;
}
/* esse é menu que tá lá no feed */
export function Menu({ children }: MenuProps) {

    const [screen, setScreen] = useState(800);

    useEffect(() => {
        function updateScreenSize() {
            setScreen(window.innerWidth);
            // console.log(`Nova largura da tela: ${screen}px`);
        }
        window.addEventListener('resize', updateScreenSize);
    })
    /* screen >= 770 */
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

                <Button>
                    <AlignJustify size={20} />
                </Button>
                <div className={menu.mobile}>
                    <span className={menu.closeContent}>
                        <Button>
                            <X />
                        </Button>
                    </span>
                    <nav className={''}>
                        {children}
                    </nav>

                </div>
            </>
        );
    }
}
