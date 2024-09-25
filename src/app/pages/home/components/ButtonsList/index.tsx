import "@/app/pages/home/styles/home_styles.css"

import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button";
import { SerenaIconCirclePlus } from "@/modules/app.modules";

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
                            <SerenaIconCirclePlus
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
