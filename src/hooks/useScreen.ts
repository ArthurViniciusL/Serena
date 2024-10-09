import { ScreenContext } from "@/context/ScreenContext";
import { useContext } from "react";

export function useScreen() {
    return useContext(ScreenContext);
}
