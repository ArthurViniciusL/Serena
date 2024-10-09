"use client";

import routes from "@/app.routes";
import { Loading } from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Root() {
    const router = useRouter();

    useEffect(() => {
        router.push(routes.Home);
    });

    return (
        <>
            <Loading type="screen" />
        </>
    );
}
