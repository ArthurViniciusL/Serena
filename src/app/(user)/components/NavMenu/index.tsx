"use client";
import menu from "./NavMenu.module.css";
import routes from "@/app.routes";
import { Button } from "@/components/Button";
import { usePageName } from "@/hooks/usePageName";
import { useScreen } from "@/hooks/useScreen";
import { useUserLogin } from "@/hooks/useUserLogin";
import {
    IconCalendar,
    IconClosedDoor,
    IconLayoutList,
    IconOpenDoor,
    IconUser,
} from "@/modules/app.modules";
import { useRouter } from "next/navigation";
import { useState } from "react";


export function NavMenu() {
    const { pageName, setPageName } = usePageName();
    const { id } = useUserLogin();
    const { screen } = useScreen();

    const route = useRouter();

    function handleButtonClick(pageUrl: string) {
        setPageName(pageUrl);

        if (pageUrl) {
            route.push(pageUrl);
        }
    }

    const [iconDoor, setIconDoor] = useState<boolean>(false);
    const iconsSize = 24;
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
                <nav className="serena-active-on-desktop">
                    <ul className="serena-responsive-content">
                        <li>
                            <Button
                                isActive={pageName === 'Feed'}
                                onClick={() => handleButtonClick(routes.Feed)}
                            >
                                <IconLayoutList size={iconsSize} />
                                Lista de servições
                            </Button>
                        </li>
                        <li>
                            <Button
                                isActive={pageName === 'Agenda'}
                                onClick={() => handleButtonClick(routes.Agenda)}
                            >
                                <IconCalendar size={iconsSize} />
                                Minha agenda
                            </Button>
                        </li>
                        <li>
                            <a>
                                <Button
                                    isActive={pageName === 'Profile'}
                                    onClick={() => handleButtonClick(routes.Profile(id))}
                                >
                                    <IconUser size={iconsSize} />
                                    Meu perfil
                                </Button>
                            </a>
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
            <>
                <nav className={`serena-active-on-mobile ${menu.mobileContainer}`}>
                    <ul className={menu.mobileBox}>
                        <li>
                            <Button
                                className="serena-btn-active-white"
                                isActive={pageName === 'Feed'}
                                onClick={() => handleButtonClick(routes.Feed)}
                            >
                                <IconLayoutList size={iconsSize} />
                            </Button>
                        </li>
                        <li>
                            <Button
                                className="serena-btn-active-white"
                                isActive={pageName === 'Agenda'}
                                onClick={() => handleButtonClick(routes.Agenda)}
                            >
                                <IconCalendar size={iconsSize} />
                            </Button>
                        </li>
                        {/*
                        <li>
                            <Button
                                className="serena-btn-active-white"
                                isActive={pageName === 'Profile'}
                                onClick={() => handleButtonClick(routes.Profile)}
                            >
                                <IconUser size={iconsSize} />
                            </Button>
                        </li>
                        */}
                        <li
                            onMouseEnter={() => handleIconDoor(true)}
                            onMouseLeave={() => handleIconDoor(false)}
                        >
                            <Button
                                className="serena-btn-active-white"
                                bgColorHover="var(--serena-red-01)"
                                onClick={() => handleIconDoor(true)}
                            >
                                {iconExit}
                            </Button>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}