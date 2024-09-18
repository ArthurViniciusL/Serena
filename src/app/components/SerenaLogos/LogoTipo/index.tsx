import "./logoTipo_styles.css";

import serena_logo from "@/app/assets/icons/logo/serena_logo.svg"
import Image from "next/image"
import { Button } from "../../Button";
import AppRoutes from "@/app/app.routes";

export function LogoTipo() {
    return (
        <div className="logo-tipo-content">
            <a href={AppRoutes.Feed}>
                <Button className="app-bg-color">
                    <Image className="content__img" src={serena_logo} width={25} height={25} alt="serena_logo" />
                </Button>
            </a>
            <h1 className="content__title">Serena</h1>
        </div>
    )
} 