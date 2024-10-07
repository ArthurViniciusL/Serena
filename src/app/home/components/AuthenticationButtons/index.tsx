import { Button } from "@/components/Button";
import { ModalCreateAccount } from "@/components/Modals/ModalCreateAccount";
import { ModalLoginAccount } from "@/components/Modals/ModalLoginAccount";

export function AuthenticationButtons() {
    return (
        <>
            <div className="serena-responsive-content">
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