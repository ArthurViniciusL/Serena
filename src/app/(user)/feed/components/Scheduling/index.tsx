import scheduling from "./Scheduling.module.css"

interface SchedulingProps {
    status: boolean
}

export function Scheduling({ status }: SchedulingProps) {

    if (status) {
        return (
            <p className={`${scheduling.content} font-semibold ${scheduling.open}`}>Aberta</p>
        )
    } else {
        return (
            <p className={`${scheduling.content} font-semibold ${scheduling.close}`}>Fechada</p>
        )
    }

}