import Image from "next/image";

import "./serenaLogo_styles.css";
import logo from "@/app/assets/icons/logo/serena_logo.svg";

export function SerenaLogo() {
    return (
        <Image
            className="serena-logo"
            src={logo}
            width={50}
            height={50}
            alt="Picture of the author"
        />
    );
}
