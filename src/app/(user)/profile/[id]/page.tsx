"use client";

import routes from "@/app.routes";
import { Loading } from "@/components/Loading";
import { usePageName } from "@/hooks/usePageName";
import { useUserLogin } from "@/hooks/useUserLogin";
import { useEffect, useState } from "react";
import { Menu } from "@/components/Ui/Menu";
import { Button } from "@/components/Button";
import { IconGrid2x2Plus, IconSettings, IconUserRound } from "@/modules/app.modules";
import { EditServices } from "./editServices/page";
import { EditProfile } from "./editProfile/page";

export default function Profile() {

    const { setPageName } = usePageName();
    const { name } = useUserLogin();

    const [isLoad, setIsLoad] = useState<boolean>(false);
    const [section, setSection] = useState<string>('EditProfile');
    const [btnEditProfile, setBtnEditProfile] = useState<boolean>(true);
    const [btnEditServices, setBtnEditServices] = useState<boolean>(false);

    useEffect(() => {
        setPageName('Profile')
        setIsLoad(true);
    }, [])

    function renderSection() {
        switch (section) {
            case 'EditProfile':
                return <EditProfile />;

            case 'EditServices':
                return <EditServices />;
        }
    }

    function handleEditProfile() {
        setBtnEditProfile(true);
        setBtnEditServices(false);
        setSection('EditProfile');
    }

    function handleEditServices() {
        setBtnEditProfile(false);
        setBtnEditServices(true);
        setSection('EditServices');
    }

    if (isLoad) {
        return (
            <>
                <div className="serena-format-menu-content">
                    <h2>Olá, {name}</h2>
                    <span></span>
                    <Menu>
                        <Button isActive={btnEditProfile} onClick={handleEditProfile}>
                            <IconUserRound size={20} />
                            Editar meu perfil
                        </Button>
                        <Button isActive={btnEditServices} onClick={handleEditServices}>
                            <IconGrid2x2Plus size={20} />
                            Editar meus serviços
                        </Button>
                        <Button>
                            <IconSettings size={20} />
                        </Button>
                    </Menu>
                </div>

                <main>
                    {renderSection()}
                </main>
            </>
        );
    }
    else {
        return <Loading type="screen" />
    }

}
