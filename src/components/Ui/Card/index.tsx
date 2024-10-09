import card from "./Card.module.css"

export interface CardProps {
    children: React.ReactNode;
}

export function Card({ children }: CardProps) {
    return <div className={card.container}>{children}</div>;
}
