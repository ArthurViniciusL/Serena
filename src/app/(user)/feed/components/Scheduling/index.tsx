import scheduling from "./Scheduling.module.css"

interface SchedulingProps {
    status: boolean
}

export function Scheduling({ status }: SchedulingProps) {

    if (status) {
        return (
            /* ${scheduling.content} font-semibold ${scheduling.open} */
            <p className="font-semibold text-base p-1 serena-ft-green-02 serena-bg-green-02:20% serena-b-radius-01" >Aberta</p>
        )
    } else {
        return (
            <p className="font-semibold text-base p-1 serena-ft-red-02 serena-bg-red-02:20% serena-b-radius-01">Fechada</p>
        )
    }

}