
/* 
1 - Modal de Login
2 - Modal de entrar
3 - Modal de detalhes de perfil
4 - Modal de add serviço
5 - Modal de edit serviço
6 - Modal de excluir serviço
7 - Modal de cancelar agendamento
8 - Modal de detalhes de serviço
*/

import { useEffect, useReducer, useState } from "react";
import { useModalContext } from "./useModalContext";

/* const Modal = {
    Login: "LOGIN",
    SignUp: "SIGN_UP",
    AboutProfile: "ABOUT_PROFILE",
    AddService: "ADD_SERVICE",
    EditService: "EDIT_SERVICE",
    DeleteService: "DELETE_SERVICE",
    CancelService: "CANCEL_SERVICE",
    AboutService: "ABOUT_SERVICE",
}; */


function modalReducer(state: any, action: any) {

    switch (action.type) {
        case 'MODAL_LOGIN':
            return {
                modal_1: true, modal_2: false
            };

        case 'MODAL_SIGN_UP':
            return {
                modal_1: false, modal_2: true
            };
        default:
            state;
    }
}

export function useOpenModal(initialState = {
    modal_1: false,
    modal_2: false
}) {
    const [state, dispatch] = useReducer(modalReducer, initialState);

    return {
        state,
        dispatch
    }
}