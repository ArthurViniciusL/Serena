"use client";

import routes from "@/app.routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Root() {

    const router = useRouter();

    useEffect(() => {
        router.push(routes.Home);
    });

    return (
        <></>
    )
}