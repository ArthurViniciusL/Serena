import "./Card.css";

export interface CardProps {
    children: React.ReactNode;
}

export function Card({ children }: CardProps) {
    return <div className="serena-card">{children}</div>;
}
