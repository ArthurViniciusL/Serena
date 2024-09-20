"use client";
import AppRoutes from "@/app/app.routes";
import { Button } from "@/app/components/Button";
import { Header } from "@/app/components/Header";
import { useButtonState } from "@/app/hooks/useButtonState";
import { AppIcon_ListFilter } from "@/app/modules/app.modules";
import Head from "next/head";
import { useEffect } from "react";

export default function Feed() {
    const { activeButton, memoValue } = useButtonState();

    useEffect(() => {
        activeButton(AppRoutes.Feed);
    }, [memoValue]);

    return (
        <div>
        <Header colorFill="var(--bg-color-01)">
            <Button>
                <AppIcon_ListFilter/>
                Filtrar categoria
            </Button>
        </Header>
        <main className="app-main">
        </main>
        </div>
    );

}
