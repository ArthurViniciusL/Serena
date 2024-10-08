import style from "./Tooltip.module.css";

interface TooltipProps {
    msg: string;
    children: React.ReactNode;
}

export function Tooltip({ msg, children }: TooltipProps) {
    return (
        <div className={style.container}>
            {children}
            <span className={style.box}>{msg}</span>
        </div>
    );
}
