import "@/components/Ui/Card/UiCard.css";

import { Card } from "@/components/Ui/Card";
import { IconBadgeCheck } from "@/modules/app.modules";
import { Avatar } from "@/components/Ui/Avatar";
import { Reviews } from "@/components/Review";

export interface ServiceProvider {
    data: {
        id: number,
        profile_picture: string,
        name: string,
        phone: string,
        email: string,
        cnpj: string,
        category: string,
        working_days: ["Segunda", "Quarta", "Sexta"],
        scheduling: boolean,
        opening_hours: {
            "morning": "08:00 - 11:00",
            "afternoon": "13:00 - 18:00"
        },
        description: string,
        review: number,
        services: [
            {
                id: number,
                name: string,
                time: number,
                price: number,
                insertion_date: string
            }
        ]
    }
}

interface CardProfileProps {
    onClick: () => void;
}

export function CardProfile({
    data,
    onClick
}: ServiceProvider & CardProfileProps) {
    return (
        <Card>
            <div onClick={onClick} className="serena-card-left-side">
                <div className=" flex flex-row justify-start gap-[var(--gap)]">
                    <Avatar src="" alt={`avatar de  ${data.name}`} />
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex flex-row gap-[var(--gap)]">
                            <h3 className="serena-card-name">{data.name}</h3>
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
                <Reviews reviewScore={data.review} />
                <p>
                    {data.review}
                </p>
                <span className="serena-card-category">{data.category}</span>
            </div>
        </Card>
    );
}
