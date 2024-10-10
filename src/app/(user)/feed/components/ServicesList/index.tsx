"use client";

import { useState } from "react"
import servicesList from "./ServicesList.module.css"
import { IconChevronDown, IconChevronUp } from "@/modules/app.modules";

interface ServicesListProps {
    services: [{}]
}

export function ServicesList({ services }: ServicesListProps) {
    //console.log(services)

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleIsOpen() {
        setIsOpen(!isOpen)
    }

    const iconChevron = isOpen ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />

    let numberItem = 1;

    return (
        <>
            <div className={servicesList.container}>
                <p className={servicesList.title} onClick={handleIsOpen}>
                    Lista de serviços:
                    {iconChevron}
                </p>


                {isOpen ?
                    <ul className={servicesList.itemsBox} >
                        {

                            services.map((service: any) => (
                                <li className={servicesList.itemWrap} key={service.id}>
                                    {numberItem++}. {service.name}
                                </li>
                            ))
                        }

                    </ul>
                    :
                    null
                }
            </div>
        </>
    )
}