"use client";

import {
    AppIcon_CalendarDays,
    AppIcon_CircleUserRound,
    AppIcon_DoorClosed,
    AppIcon_DoorOpen,
    AppIcon_LayoutList,
} from "@/app/modules/app.modules";

import { Button } from "../../../Button";
import { useState } from "react";
import { useButtonState } from "@/app/hooks/useButtonState";
import { useRouter } from "next/navigation";
import AppRoutes from "@/app/app.routes";

export const PageName = {
    Feed: "feed",
    Agenda: "agenda",
    Profile: "profile",
};

export function ButtonsList() {

    const { buttonActive, activeButton } = useButtonState();

    const route = useRouter();

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
                    isActive={PageName.Feed === buttonActive}
                    onClick={() => {
                        activeButton(PageName.Feed), route.push(AppRoutes.Feed);
                    }}
                >
                    <AppIcon_LayoutList size={iconsSize} />
                    Lista de servições
                </Button>
            </li>
            <li>
                <Button
                    isActive={PageName.Agenda === buttonActive}
                    onClick={() => activeButton(PageName.Agenda)}
                >
                    <AppIcon_CalendarDays size={iconsSize} />
                    Minha agenda
                </Button>
            </li>
            <li>
                <Button
                    isActive={PageName.Profile === buttonActive}
                    onClick={() => {
                        activeButton(PageName.Profile),
                            route.push(AppRoutes.Profile);
                    }}
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
