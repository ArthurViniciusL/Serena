import { Button } from "@/components/Button";
import { Tooltip } from "@/components/Ui/Tooltip";
import { IconMoreInfo } from "@/modules/app.modules";

export function HomeInfo() {
    return (
        <>
            <ul className="serena-responsive-content">
                <li>
                    <Button>
                        Sobre
                    </Button>
                </li>

                <li>
                    <Button>
                        Recursos
                    </Button>
                </li>

                <li>
                    <Button>
                        Preços
                    </Button>
                </li>

                <li>
                    <Tooltip msg="Mais informações">
                        <Button>
                            <IconMoreInfo size={20} />
                        </Button>
                    </Tooltip>
                </li>
            </ul>
        </>
    )
}