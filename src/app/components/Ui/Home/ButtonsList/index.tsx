import "./styles.css";

import { Tooltip } from "@/app/components/Tooltip";
import { Button } from "../../../Button";
import { AppIcon_CirclePlus } from "@/app/modules/app.modules";

export function ButtonsList() {
    return (
        <div>
            <ul className="home-buttons__list">
                <li>
                    <Button
                        bgColorHover="var(--bg-color-01)"
                        fontColorHover="var(--font-color-01)"
                    >
                        Sobre
                    </Button>
                </li>
                <li>
                    <Button
                        bgColorHover="var(--bg-color-01)"
                        fontColorHover="var(--font-color-01)"
                    >
                        Recursos
                    </Button>
                </li>
                <li>
                    <Button
                        bgColorHover="var(--bg-color-01)"
                        fontColorHover="var(--font-color-01)"
                    >
                        Preços
                    </Button>
                </li>

                <li>
                    <Tooltip msg="Mais informações">
                        <Button bgColorHover="var(--bg-color-01)">
                            <AppIcon_CirclePlus
                                color="var(--font-color-01)"
                                size={20}
                            />
                        </Button>
                    </Tooltip>
                </li>
            </ul>
        </div>
    );
}
