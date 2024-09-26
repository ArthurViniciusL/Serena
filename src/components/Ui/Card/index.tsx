import { useModal } from "@/hooks/useModal";
import { Button } from "../../Button";
import { ModalSeeDetails } from "../../Modals/ModalSeeDetails";
import "./Card-styles.css"

import { SerenaIconBadgeCheck, SerenaIconImage, SerenaIconStar } from "@/modules/app.modules";

interface UserCardProps {
    id: number;
    name: string;
    category: string;
}

export function Card({ id, name, category }: UserCardProps) {

    const { openModal } = useModal();

    return (
        <div className="user-card-content">

            <div className="content-left-side">
                <Button bgColorHover="var(--serena-03)">
                    <SerenaIconImage size={30} />
                </Button>

                <div className="content__name">
                    <div className="content-name__box">
                        <h3 className="service-provider-name">{name}</h3>
                        <SerenaIconBadgeCheck stroke="var(--serena-01)" size={20} />
                    </div>
                    <ModalSeeDetails id={id} name={name}>
                        <button>Ver detalhes</button>
                    </ModalSeeDetails>
                </div>
            </div>

            <div className="content__category">
                <span className="category-name">{category}</span>
                <div className="flex flex-row">
                    <SerenaIconStar fill="var(--serena-yellow)" stroke="" size={20} />
                    <SerenaIconStar fill="var(--serena-yellow)" stroke="" size={20} />
                    <SerenaIconStar fill="var(--serena-yellow)" stroke="" size={20} />
                    <SerenaIconStar fill="var(--serena-yellow)" stroke="" size={20} />
                    <SerenaIconStar fill="var(--serena-yellow)" stroke="" size={20} />
                </div>
            </div>

        </div>
    )
}