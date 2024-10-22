import editProfile from "./EditProfile.module.css"

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useUserLogin } from "@/hooks/useUserLogin"
import { IconPencil } from "@/modules/app.modules";

export function EditProfile() {
    const { user } = useUserLogin();

    function handle() {

    }

    return (
        <>
            <section>
                {
                    user && user.map((data: any) => (
                        <form className="flex flex-col gap-2" key={data.id}>

                            <div>
                                <h3 className="font-semibold">* Nome:</h3>
                                {/* value="" */}
                                <input placeholder={data.name} type="text" />
                            </div>

                            <div className={editProfile.content}>
                                <div className={editProfile.warrapInput}>
                                    <Input onChange={handle} label="* Nome:" value={data.name} type="name" />
                                </div>
                                <Button onClick={handle}>
                                    <IconPencil size={20} />
                                </Button>
                            </div>
                        </form>
                    ))
                }
            </section>
        </>
    )
}