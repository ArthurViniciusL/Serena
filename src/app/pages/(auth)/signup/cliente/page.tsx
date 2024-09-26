"use client"

import routes from "@/app.routes";
import { Button } from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ClientCreateAccount() {
    
    const router = useRouter()

    return (
        /* EXEMPLO USANDO CLASSES TAILWIND */
        <div className="m-11 flex gap-10 flex-col">
            <h1>Exemplo de link:</h1>
            <Button onClick={() => router.push(routes.Home)}>
                Link com hook
            </Button>
            
            <a href={routes.Home}>Link nativo do  HTML</a>

            <a href={routes.Home}>
                <Button>
                    Link nativo com botão
                </Button>
            </a>

            <Link href={routes.Home}>
                Componente de Link nativo do Nex.js
            </Link>
        </div>
    );
}
