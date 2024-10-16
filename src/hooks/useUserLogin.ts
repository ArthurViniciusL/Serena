import { UserLoginContext } from "@/context/UserLogin";
import { useContext } from "react";

export function useUserLogin() {
    return useContext(UserLoginContext)
}