import "./tooltip_styles.css";

interface TooltipProps {
    msg: string;
    children: React.ReactNode;
}

export function Tooltip({ msg, children }: TooltipProps) {
    return (
        <div className="serena-tooltip">
            {children}
            <span className="serena-tooltip__content">{msg}</span>
        </div>
    );
}
