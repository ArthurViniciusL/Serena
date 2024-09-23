import { useContext } from "react";
import { PageNameContext } from "../context/PageNameContext";

export function usePageName() {
    return useContext(PageNameContext);
}
