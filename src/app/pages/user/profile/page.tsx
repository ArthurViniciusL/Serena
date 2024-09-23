"use client";

import AppRoutes from "@/app.routes";
import { usePageName } from "@/hooks/usePageName";
import { useEffect } from "react";

export default function Profile() {
    const { activeButton } = usePageName();

    useEffect(() => {
        activeButton(AppRoutes.Profile);
    });

    return <h1>Profile</h1>;
}
