"use client";

import {
    AppIcon_CalendarDays,
    AppIcon_CircleUserRound,
    AppIcon_DoorClosed,
    AppIcon_DoorOpen,
    AppIcon_LayoutList,
} from "@/modules/app.modules";

import { Button } from "../../../Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppRoutes from "@/app.routes";
import { usePageName } from "@/hooks/usePageName";
import useSearch from "@/hooks/useSearch";

export function ButtonsList() {
    const { currentPage, activeButton } = usePageName();

    const route = useRouter();

    function handleButtonClick(pageLink: string) {
        activeButton(pageLink);
        if (pageLink) {
            route.push(pageLink);
        }
    }

    const iconsSize = 24;
    const [iconDoor, setIconDoor] = useState<boolean>(false);
    const iconExit = iconDoor ? (
        <AppIcon_DoorOpen size={iconsSize} />
    ) : (
        <AppIcon_DoorClosed size={iconsSize} />
    );

    function handleIconDoor(status: boolean) {
        setIconDoor(status);
    }
    return (
        <ul className="flex gap-[var(--gap)] feed-buttons__list">
            <li>
                <Button
                    isActive={currentPage === AppRoutes.Feed}
                    onClick={() => {
                        handleButtonClick(AppRoutes.Feed);
                    }}
                >
                    <AppIcon_LayoutList size={iconsSize} />
                    Lista de servições
                </Button>
            </li>
            <li>
                <Button
                    isActive={currentPage === AppRoutes.Agenda}
                    onClick={() => handleButtonClick(AppRoutes.Agenda)}
                >
                    <AppIcon_CalendarDays size={iconsSize} />
                    Minha agenda
                </Button>
            </li>
            <li>
                <Button
                    isActive={currentPage === AppRoutes.Profile}
                    onClick={() => handleButtonClick(AppRoutes.Profile)}
                >
                    <AppIcon_CircleUserRound size={iconsSize} />
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
