import editProfile from "./EditProfile.module.css"

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useUserLogin } from "@/hooks/useUserLogin"
import { IconPencil } from "@/modules/app.modules";
import { useEffect, useState } from "react";

export function EditProfile() {
    const { user } = useUserLogin();

    type cursorMode = 'none' | 'auto';
    const [cursor, setCursor] = useState<cursorMode>('none');

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [cnpj, setCnpj] = useState<string>('');
    const [category, setcategory] = useState<string>('');
    const [workingDays, setWorkingDays] = useState<string>('');

    function editLabel() {
        setCursor("auto");
    }

    function handle() {
    }

    useEffect(() => {
        if (user) {
            user.forEach((data: any) => {
                setName(data.name);
                setDescription(data.description);
                setCnpj(data.cnpj);
                setcategory(data.category);
                setWorkingDays(data.working_days);

            });
        }
    })

    return (
        <>
            <section className="flex flex-col justify-center items-center gap-2">

                <div className="flex justify-between items-center cursor-not-allowed">
                    <div style={{ pointerEvents: cursor }}>
                        <h3 className="font-semibold">* Nome:</h3>
                        {/* <input className="text-lg" placeholder={name} type="text" /> */}
                        <Input onChange={handle} placeholder={name} type="name" />
                    </div>
                    <Button className="serena-btn-transparent" onClick={editLabel} >
                        <IconPencil size={20} />
                    </Button>
                </div>

                <div className="flex justify-between items-center cursor-not-allowed">
                    <div style={{ pointerEvents: cursor }}>
                        <h3 className="font-semibold">* Minha descrição:</h3>
                        <Input onChange={handle} placeholder={description} type="name" />
                    </div>
                    <Button className="serena-btn-transparent" onClick={editLabel} >
                        <IconPencil size={20} />
                    </Button>
                </div>

                <div className="flex justify-between items-center cursor-not-allowed">
                    <div style={{ pointerEvents: cursor }}>
                        <h3 className="font-semibold">* CPF/CNPJ:</h3>
                        <Input onChange={handle} placeholder={cnpj} type="name" />
                    </div>
                    <Button className="serena-btn-transparent" onClick={editLabel} >
                        <IconPencil size={20} />
                    </Button>
                </div>

                <div className="flex justify-between items-center cursor-not-allowed">
                    <div style={{ pointerEvents: cursor }}>
                        <h3 className="font-semibold">* Categoria:</h3>
                        <Input onChange={handle} placeholder={category} type="name" />
                    </div>
                    <Button className="serena-btn-transparent" onClick={editLabel} >
                        <IconPencil size={20} />
                    </Button>
                </div>

                <div className="flex justify-between items-center cursor-not-allowed">
                    <div style={{ pointerEvents: cursor }}>
                        <h3 className="font-semibold">* Dias de trabalho:</h3>
                        <Input onChange={handle} placeholder={workingDays} type="name" />
                    </div>
                    <Button className="serena-btn-transparent" onClick={editLabel} >
                        <IconPencil size={20} />
                    </Button>
                </div>

                <div className="flex justify-between items-center cursor-not-allowed">
                    <div style={{ pointerEvents: cursor }}>
                        <h3 className="font-semibold">* Dias de trabalho:</h3>
                        <Input onChange={handle} placeholder={workingDays} type="name" />
                    </div>
                    <Button className="serena-btn-transparent" onClick={editLabel} >
                        <IconPencil size={20} />
                    </Button>
                </div>
            </section>
        </>
    )
}