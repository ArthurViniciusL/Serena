import { SerenaIconImage } from "@/modules/app.modules";
import Image from "next/image";

interface AvatarProps {
    src: string;
    alt: string;
}

export function Avatar({ src, alt }: AvatarProps) {
    return (
        <span>
            {src === "" ? (
                <SerenaIconImage size={50} />
            ) : (
                <Image src={src} alt="avatar de ..." />
            )}
        </span>
    );
}
