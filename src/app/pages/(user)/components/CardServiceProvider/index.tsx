import "@/components/Ui/Card/Card-styles.css"

import { Card, CardProps } from "@/components/Ui/Card";
import { SerenaIconBadgeCheck, SerenaIconStar } from "@/modules/app.modules";
import { Avatar } from "@/components/Ui/Avatar";



export function CardServiceProvider({name, category}:CardProps) {
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
                    <SerenaIconStar
                        fill="var(--serena-yellow)"
                        stroke=""
                        size={20}
                    />
                </div>
                <span className="app-card-category">{category}</span>
            </div>
        </Card>
    )
}