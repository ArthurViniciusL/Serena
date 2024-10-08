"use client";

import routes from "@/app.routes";
import { usePageName } from "@/hooks/usePageName";
import { useEffect } from "react";

export default function Profile() {
    const { setPageName, currentPage } = usePageName();

    useEffect(() => {
        setPageName(routes.Profile);
    });

    return <h1>{currentPage}</h1>;
}
