import { useContext } from "react";
import { PageNameContext } from "../context/PageNameContext";

export function useButtonState() {
    return useContext(PageNameContext);
};
