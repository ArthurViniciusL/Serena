"use client";

import { AppIcon_CalendarDays, AppIcon_CircleUserRound, AppIcon_DoorClosed, AppIcon_DoorOpen, AppIcon_LayoutList } from "@/app/modules/app.modules";
import { Button } from "../../../Button";
import { useState } from "react";

export function ButtonsList() {

    const iconsSize = 24;

    const [iconDoor, setIconDoor] = useState(false);

    const iconExit = iconDoor ? <AppIcon_DoorOpen size={iconsSize} /> : <AppIcon_DoorClosed size={iconsSize} />

    function handleIconDoor(status:boolean) {
        setIconDoor(status)
    }

    return (
        <ul className="flex gap-[var(--gap)] feed-buttons__list">
            <li>
                <Button>
                    <AppIcon_LayoutList size={iconsSize} />
                    Lista de servições
                </Button>
            </li>
            <li>
                <Button>
                    <AppIcon_CalendarDays size={iconsSize} />
                    Minha agenda
                </Button>
            </li>
            <li>
                <Button>
                    <AppIcon_CircleUserRound size={iconsSize} />
                    Meu perfil
                </Button>
            </li>
            <li onMouseEnter={() => handleIconDoor(true)} onMouseLeave={() => handleIconDoor(false)}>
                <Button bgColorHover="var(--serena-01)" onClick={() => handleIconDoor(true)}>
                    {iconExit}
                    Sair
                </Button>
            </li>
        </ul>
    )
}