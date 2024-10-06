"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Root() {

    const router = useRouter();

    useEffect(() => {
        router.push('/home');
    });

    return (
        <></>
    )
}