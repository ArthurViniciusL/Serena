"use client";

import routes from "@/app.routes";
import { useUserLogin } from "@/hooks/useUserLogin";
import { useEffect, useState } from "react";

export default function Profile() {

    //const { setPageName } = usePageName();

    const { user } = useUserLogin();

    return (
        <>
            {
                user && user.map((userData: any) => (
                    <div key={userData.id}>
                        <p>{userData.name}</p>
                    </div>
                ))
            }
        </>


    );
}
