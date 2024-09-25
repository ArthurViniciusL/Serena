"use client";

import {
    SerenaIconCalendarDays,
    SerenaIconCircleUserRound,
    SerenaIconDoorClosed,
    SerenaIconDoorOpen,
    SerenaIconLayoutList,
} from "@/modules/app.modules";

import { Button } from "../../../../../../components/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import routes from "@/app.routes";
import { usePageName } from "@/hooks/usePageName";
export function ButtonsList() {
    const { currentPage, setPageName } = usePageName();

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
        <SerenaIconDoorOpen size={iconsSize} />
    ) : (
        <SerenaIconDoorClosed size={iconsSize} />
    );

    function handleIconDoor(status: boolean) {
        setIconDoor(status);
    }
     {/* Mudar para um componente nav -> ul -> li*/}
    return (
        <ul className="flex gap-[var(--gap)] feed-buttons__list">
            <li>
                <Button
                    isActive={currentPage === routes.Feed}
                    onClick={() => {
                        handleButtonClick(routes.Feed);
                    }}
                >
                    <SerenaIconLayoutList size={iconsSize} />
                    Lista de servições
                </Button>
            </li>
            <li>
                <Button
                    isActive={currentPage === routes.Agenda}
                    onClick={() => handleButtonClick(routes.Agenda)}
                >
                    <SerenaIconCalendarDays size={iconsSize} />
                    Minha agenda
                </Button>
            </li>
            <li>
                <Button
                    isActive={currentPage === routes.Profile}
                    onClick={() => handleButtonClick(routes.Profile)}
                >
                    <SerenaIconCircleUserRound size={iconsSize} />
                    Meu perfil
                </Button>
            </li>
            <li
                onMouseEnter={() => handleIconDoor(true)}
                onMouseLeave={() => handleIconDoor(false)}
            >
                <Button
                    bgColorHover="var(--serena-01)"
                    onClick={() => handleIconDoor(true)}
                >
                    {iconExit}
                    Sair
                </Button>
            </li>
        </ul>
    );
}
