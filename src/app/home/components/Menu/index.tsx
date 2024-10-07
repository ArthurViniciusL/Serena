import { Button } from "@/components/Button";
import { ModalCreateAccount } from "@/components/Modals/ModalCreateAccount";
import { ModalLoginAccount } from "@/components/Modals/ModalLoginAccount";
import { Tooltip } from "@/components/Ui/Tooltip";
import { IconMoreInfo } from "@/modules/app.modules";
import { AlignJustify } from "lucide-react";
import { useEffect, useState } from "react";

export function Menu() {

    const [screen, setScreen] = useState(800);

    useEffect(() => {
        function updateScreenSize() {
            setScreen(window.innerWidth);
            // console.log(`Nova largura da tela: ${screen}px`);
        }
        window.addEventListener('resize', updateScreenSize);
    })
/* screen >= 770 */
    if (true) {
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
                        <Tooltip msg="Mais informações">
                            <Button>
                                <IconMoreInfo size={20} />
                            </Button>
                        </Tooltip>
                    </li>
                </ul>

                <div className="flex flex-row align-baseline gap-[var(--gap)]">
                    <ModalLoginAccount>
                        <Button bgColor="var(--bg-color-01)">
                            Entrar
                        </Button>
                    </ModalLoginAccount>
                    <ModalCreateAccount>
                        <Button bgColor="var(--bg-color-01)" border={true}>
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