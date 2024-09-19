"use client";
import { PageName } from "@/app/components/Ui/Feed/ButtonsList";
import { useButtonState } from "@/app/hooks/useButtonState";
import { useEffect } from "react";

export default function Feed() {
    const { activeButton, memoValue } = useButtonState();

    useEffect(() => {
        activeButton(PageName.Feed);
    },[memoValue]);

    return <main className="app-main"></main>;
}
