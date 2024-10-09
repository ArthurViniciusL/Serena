"use client";
import menu from "./PageMenu.module.css";
import routes from "@/app.routes";
import { Button } from "@/components/Button";
import { usePageName } from "@/hooks/usePageName";
import { useScreen } from "@/hooks/useScreen";
import {
    IconCalendar,
    IconClosedDoor,
    IconLayoutList,
    IconOpenDoor,
    IconUser,
} from "@/modules/app.modules";
import { useRouter } from "next/navigation";
import { useState } from "react";


export function PagesMenuDesktop() {
    const { currentPage, setPageName } = usePageName();
    const { screen } = useScreen()
    const route = useRouter();

    function handleButtonClick(pageLink: string) {
        setPageName(pageLink);
        if (pageLink) {
            route.push(pageLink);
        }
    }

    const iconsSize = 24;
    const [iconDoor, setIconDoor] = useState<boolean>(false);
    const iconExit = iconDoor ? (
        <IconOpenDoor size={iconsSize} />
    ) : (
        <IconClosedDoor size={iconsSize} />
    );

    function handleIconDoor(status: boolean) {
        setIconDoor(status);
    }
    
    if (screen >= 770) {
        return (
            // serena-active-on-desktop
            <>
                <nav className="">
                    <ul className="serena-responsive-content">
                        <li>
                            <Button
                                isActive={currentPage === routes.Feed}
                                onClick={() => handleButtonClick(routes.Feed)}
                            >
                                <IconLayoutList size={iconsSize} />
                                Lista de servições
                            </Button>
                        </li>
                        <li>
                            <Button
                                isActive={currentPage === routes.Agenda}
                                onClick={() => handleButtonClick(routes.Agenda)}
                            >
                                <IconCalendar size={iconsSize} />
                                Minha agenda
                            </Button>
                        </li>
                        <li>
                            <Button
                                isActive={currentPage === routes.Profile}
                                onClick={() => handleButtonClick(routes.Profile)}
                            >
                                <IconUser size={iconsSize} />
                                Meu perfil
                            </Button>
                        </li>
                        <li
                            onMouseEnter={() => handleIconDoor(true)}
                            onMouseLeave={() => handleIconDoor(false)}
                        >
                            <Button
                                bgColorHover="var(--serena-red-01)"
                                onClick={() => handleIconDoor(true)}
                            >
                                {iconExit}
                                Sair
                            </Button>
                        </li>
                    </ul>
                </nav>
            </>
        );
    } else {
        return (
            <></>
        )
    }

    /*
    if (screen >= 770) {
        return (
            <ul className="serena-responsive-content">
                <li>
                    <Button
                        isActive={currentPage === routes.Feed}
                        onClick={() => handleButtonClick(routes.Feed)}
                    >
                        <IconLayoutList size={iconsSize} />
                        Lista de servições
                    </Button>
                </li>
                <li>
                    <Button
                        isActive={currentPage === routes.Agenda}
                        onClick={() => handleButtonClick(routes.Agenda)}
                    >
                        <IconCalendar size={iconsSize} />
                        Minha agenda
                    </Button>
                </li>
                <li>
                    <Button
                        isActive={currentPage === routes.Profile}
                        onClick={() => handleButtonClick(routes.Profile)}
                    >
                        <IconUser size={iconsSize} />
                        Meu perfil
                    </Button>
                </li>
                <li
                    onMouseEnter={() => handleIconDoor(true)}
                    onMouseLeave={() => handleIconDoor(false)}
                >
                    <Button
                        bgColorHover="var(--serena-red-01)"
                        onClick={() => handleIconDoor(true)}
                    >
                        {iconExit}
                        Sair
                    </Button>
                </li>
            </ul>
        );
    } else {
        return (
            <footer className={menu.mobileContainer}>
                <ul className={menu.mobileBox}>
                    <li>
                        <Button
                            isActive={currentPage === routes.Feed}
                            onClick={() => handleButtonClick(routes.Feed)}
                        >
                            <IconLayoutList size={iconsSize} />
                        </Button>
                    </li>
                    <li>
                        <Button
                            isActive={currentPage === routes.Agenda}
                            onClick={() => handleButtonClick(routes.Agenda)}
                        >
                            <IconCalendar size={iconsSize} />
                        </Button>
                    </li>
                    <li>
                        <Button
                            isActive={currentPage === routes.Profile}
                            onClick={() => handleButtonClick(routes.Profile)}
                        >
                            <IconUser size={iconsSize} />
                        </Button>
                    </li>
                    <li
                        onMouseEnter={() => handleIconDoor(true)}
                        onMouseLeave={() => handleIconDoor(false)}
                    >
                        <Button
                            bgColorHover="var(--serena-red-01)"
                            onClick={() => handleIconDoor(true)}
                        >
                            {iconExit}
                        </Button>
                    </li>
                </ul>
            </footer>
        );
    }
    */

}

export function PagesMenuMobile() {
    const { currentPage, setPageName } = usePageName();
    const { screen } = useScreen();

    const route = useRouter();

    function handleButtonClick(pageLink: string) {
        setPageName(pageLink);
        if (pageLink) {
            route.push(pageLink);
        }
    }

    const iconsSize = 24;
    const [iconDoor, setIconDoor] = useState<boolean>(false);
    const iconExit = iconDoor ? (
        <IconOpenDoor size={iconsSize} />
    ) : (
        <IconClosedDoor size={iconsSize} />
    );

    function handleIconDoor(status: boolean) {
        setIconDoor(status);
    }

    if (screen < 770) {
        return (
            // serena-active-on-mobile
            <>
                <footer className={menu.footer}>
                    <nav className={menu.mobileContainer}>
                        <ul className={menu.mobileBox}>
                            <li>
                                <Button
                                    isActive={currentPage === routes.Feed}
                                    onClick={() => handleButtonClick(routes.Feed)}
                                >
                                    <IconLayoutList size={iconsSize} />
                                </Button>
                            </li>
                            <li>
                                <Button
                                    isActive={currentPage === routes.Agenda}
                                    onClick={() => handleButtonClick(routes.Agenda)}
                                >
                                    <IconCalendar size={iconsSize} />
                                </Button>
                            </li>
                            <li>
                                <Button
                                    isActive={currentPage === routes.Profile}
                                    onClick={() => handleButtonClick(routes.Profile)}
                                >
                                    <IconUser size={iconsSize} />
                                </Button>
                            </li>
                            <li
                                onMouseEnter={() => handleIconDoor(true)}
                                onMouseLeave={() => handleIconDoor(false)}
                            >
                                <Button
                                    bgColorHover="var(--serena-red-01)"
                                    onClick={() => handleIconDoor(true)}
                                >
                                    {iconExit}
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </footer>
            </>
        );
    } else {
        return (
            <></>
        )

    }
}
