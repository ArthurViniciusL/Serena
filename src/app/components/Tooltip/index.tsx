import "./tooltip_styles.css"

interface TooltipProps {
    msg: string;
    children: React.ReactNode;
}

export function Tooltip({ msg, children }: TooltipProps) {
    return (
        <div className="app-tooltip">
            {children}
            <span className="app-tooltip__content">
                {msg}
            </span>
        </div>
    );
}
