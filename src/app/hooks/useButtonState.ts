import { useContext } from "react";
import { ButtonContext } from "../context/ButtonContext";

export function useButtonState() {
    return useContext(ButtonContext);
}
