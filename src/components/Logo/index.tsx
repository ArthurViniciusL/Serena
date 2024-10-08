import style from "./Logo.module.css"

import Image from "next/image";
import logo from "@/assets/icons/logo/serena_logo.svg";
import routes from "@/app.routes";

interface LogoProps {
    type: 'LogoTipo' | "LogoMarca";
}

export function Logo({ type }: LogoProps) {
    switch (type) {
        case "LogoTipo":

            return (
                <div className={style.logoContainer}>
                    <Image
                        className={style.logo}
                        src={logo}
                        width={40}
                        height={40}
                        alt="Picture of the author"
                        priority={true}
                    />
                    <h1 className={style.title}>Serena</h1>
                </div>
            )

        case "LogoMarca":
            return (
                <>
                    <Image
                        className={style.logo}
                        src={logo}
                        width={40}
                        height={40}
                        alt="Picture of the author"
                        priority={true}
                    />
                </>
            )

        default:
            return null;
    }
}