/* @arthur.vsl */

const routes = {
    Home: "/",
    Login: "",

    Feed: "/pages/feed",
    Agenda: "",
    Profile: "/pages/profile",

    Cadastro: "",

    CreateClientAccount: "",
    CreateServiceAccount: "",

    pageWithId: (id: number) => `/page_path${id}`,
};
export default routes;
