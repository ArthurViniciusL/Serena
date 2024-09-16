import { useEffect, useReducer, useState } from "react";
import { useModalContext } from "./useModalContext";

/* export const Modal = {
    Login: "LOGIN",
    SignUp: "SIGN_UP",
    AboutProfile: "ABOUT_PROFILE",
    AddService: "ADD_SERVICE",
    EditService: "EDIT_SERVICE",
    DeleteService: "DELETE_SERVICE",
    CancelService: "CANCEL_SERVICE",
    AboutService: "ABOUT_SERVICE",
};
 */

export const Modal = {
    login: "LOGIN",
    signUp: "SIGN_UP",
};

function modalReducer(state: any, action: any) {
    switch (action.type) {
        case Modal.login:
            return {
                LOGIN: true,
                SIGN_UP: false,
            };

        case Modal.signUp:
            return {
                LOGIN: false,
                SIGN_UP: true,
            };
        default:
            state;
    }
}

export function useOpenModal(
    initialState = {
        LOGIN: false,
        SIGN_UP: false,
    },
) {
    const { openModal } = useModalContext();
    const [state, dispatch] = useReducer(modalReducer, initialState);

    function openThisModal(modalType: string) {
        openModal();
        dispatch({ type: modalType });
    }

    return {
        state,
        dispatch,
        openThisModal,
    };
}
