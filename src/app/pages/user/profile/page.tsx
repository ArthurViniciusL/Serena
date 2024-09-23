"use client";

import AppRoutes from "@/app/app.routes";
import { useButtonState } from "@/app/hooks/useButtonState";
import { useEffect } from "react";

export default function Profile() {
    const { activeButton } = useButtonState();

    useEffect(() => {
        activeButton(AppRoutes.Profile);
    });

    return <h1>Profile</h1>;
}
