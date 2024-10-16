/* @arthur.vsl */

const routes = {
    Home: "/home",
    Login: "",

    Feed: "/feed",
    Agenda: "/",
    Profile: (id:number) => `/profile/${id}`,

    Cadastro: "",

    CreateClientAccount: "",
    CreateServiceAccount: "",

    pageWithId: (id: number) => `/page_path${id}`,
};
export default routes;
