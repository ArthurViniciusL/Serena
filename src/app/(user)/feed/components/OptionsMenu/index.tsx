import { Button } from "@/components/Button";
import { IconFilter } from "@/modules/app.modules";

export function OptionsMenu() {
    return (
        <>
            <Button bgColorHover="var(--serena-red-02)">
                <IconFilter/>
                Filtrar categoria
            </Button>
        </>
    )
}