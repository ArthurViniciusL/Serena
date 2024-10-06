import { Button } from "@/components/Button";
import { ModalCreateAccount } from "@/components/Modals/ModalCreateAccount";
import { ModalLoginAccount } from "@/components/Modals/ModalLoginAccount";
import { Tooltip } from "@/components/Ui/Tooltip";
import { IconMoreInfo } from "@/modules/app.modules";
import { AlignJustify } from "lucide-react";
import { useEffect, useState } from "react";

export function Menu() {

    const [screen, setScreen] = useState(0);

    useEffect(() => {
        function updateScreenSize() {
            setScreen(window.innerWidth);
            console.log(`Nova largura da tela: ${screen}px`);
        }
        window.addEventListener('resize', updateScreenSize);
    })

    if (screen >= 770) {
        return (
            <>
                <ul className="flex flex-row gap-[var(--gap)] justify-between">
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
                        <Button>
                            <Tooltip msg="Mais informações">
                                <IconMoreInfo size={20} />
                            </Tooltip>
                        </Button>
                    </li>
                </ul>

                <div className="flex flex-row align-baseline gap-[var(--gap)]">
                    <ModalLoginAccount>
                        <Button>
                            Entrar
                        </Button>
                    </ModalLoginAccount>
                    <ModalCreateAccount>
                        <Button>
                            Criar conta
                        </Button>
                    </ModalCreateAccount>
                </div>
            </>
        )
    }

    else {
        return (
            <>
                {/* é provisório ok, isso vai virar um outro componente chamado "MobileMenu" que carrega um children */}
                <AlignJustify size={20} />
            </>
        );
    }


}