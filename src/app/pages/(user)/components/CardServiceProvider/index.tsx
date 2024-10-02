import "@/components/Ui/Card/Card.css";

import { Card, CardProps } from "@/components/Ui/Card";
import { SerenaIconBadgeCheck, SerenaIconStar } from "@/modules/app.modules";
import { Avatar } from "@/components/Ui/Avatar";
import { Reviews } from "@/components/Rating";

interface CardServiceProviderProps {
    name: string;
    review: string;
    category: string;
}

export function CardServiceProvider({ name, category, review }: CardServiceProviderProps) {
    return (
        <Card>
            <div className="app-card-left-side">
                <div className=" flex flex-row justify-start gap-[var(--gap)]">
                    <Avatar src="" alt={`avatar de  ${name}`} />
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex flex-row gap-[var(--gap)]">
                            <h3 className="app-card-name">{name}</h3>
                            <SerenaIconBadgeCheck
                                stroke="var(--serena-01)"
                                size={20}
                            />
                        </div>
                        <button>Ver detalhes</button>
                    </div>
                </div>
            </div>
            <div className="app-card-right-side gap-4">
                <div className="cursor">
                    <Reviews nota={review}/>
                    <SerenaIconStar
                        fill="var(--serena-yellow)"
                        stroke=""
                        size={20}
                    />
                </div>
                <span className="app-card-category">{category}</span>
            </div>
        </Card>
    );
}
