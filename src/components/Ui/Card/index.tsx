import "./Card-styles.css";

export interface CardProps {
    children?: React.ReactNode;

    name?: string;
    category?: string;
}

export function Card({children}: CardProps) {
    return (
        <div className="app-card">
                {children}
        </div>
    )
}