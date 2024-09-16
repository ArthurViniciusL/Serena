"use client";

import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export function useModalContext() {
    return useContext(ModalContext);
}
