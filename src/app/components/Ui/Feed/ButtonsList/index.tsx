import { AppIcon_CalendarDays, AppIcon_CircleUserRound, AppIcon_DoorClosed, AppIcon_LayoutList } from "@/app/modules/app.modules";
import { Button } from "../../../Button";

export function ButtonsList() {
    
    const iconsSize = 24;

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
            <li>
                <Button bgColorHover="var(--serena-01)">
                    <AppIcon_DoorClosed size={iconsSize} />
                    Sair
                </Button>
            </li>
        </ul>
    )
}