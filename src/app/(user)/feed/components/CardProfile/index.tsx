import "@/components/Ui/Card/UiCard.css";

import { Card } from "@/components/Ui/Card";
import { IconBadgeCheck } from "@/modules/app.modules";
import { Avatar } from "@/components/Ui/Avatar";
import { Reviews } from "@/components/Review";

interface CardProfileProps {
    name: string;
    review: string;
    category: string;
    onClick: () => void;
}

export function CardProfile({
    name,
    category,
    review,
    onClick,
}: CardProfileProps) {
    return (
        <Card>
            <div onClick={onClick} className="serena-card-left-side">
                <div className=" flex flex-row justify-start gap-[var(--gap)]">
                    <Avatar src="" alt={`avatar de  ${name}`} />
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex flex-row gap-[var(--gap)]">
                            <h3 className="serena-card-name">{name}</h3>
                            <IconBadgeCheck
                                stroke="var(--serena-red-01)"
                                size={20}
                            />
                        </div>
                        <button className="cursor-pointer">Ver detalhes</button>
                    </div>
                </div>
            </div>
            <div className="serena-card-right-side gap-4">
                <Reviews scoreServiceProvider={review} />
                <span className="serena-card-category">{category}</span>
            </div>
        </Card>
    );
}
