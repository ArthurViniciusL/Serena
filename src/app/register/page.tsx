"use client";

import "@/app/pages/home/styles/home_styles.css";

import { Button } from "@/components/Button";
import { Header } from "@/components/Ui/Header";

import Image from "next/image";
import home_banner_01 from "@/assets/images/home_banner_01.svg";
import serena_asset_4 from "@/assets/images/serena_asset_4.svg";

import { ModalCreateAccount } from "@/components/Modals/ModalCreateAccount";
import { ModalLoginAccount } from "@/components/Modals/ModalLoginAccount";

import routes from "@/app.routes";
import { LogoMarca } from "@/components/Ui/LogoMarca";
import { ButtonsList } from "../home/components/ButtonsList";

export default function Register() {
    return (
        <div>
          <div className="max-h-[12vh]">

            <Header colorFill="var(--bg-color-02)" >
                <div className="home-header__content">
                    <a href={routes.Home}>
                        <LogoMarca />
                    </a>
                    <ButtonsList />
                </div>

                <ul className="home-buttons__list remove-on-mobile">
                    <li>
                        <ModalLoginAccount>
                            <Button className="app-bg-color">Entrar</Button>
                        </ModalLoginAccount>
                    </li>
                    <li>
                        <ModalCreateAccount>
                            <Button className="app-bg-color" border={true}>
                                Criar conta
                            </Button>
                        </ModalCreateAccount>
                    </li>
                </ul>
            </Header>
          </div>

          <section className="bg-gray-50 dark:bg-gray-900 w-full max-h-[88vh]">
                <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-auto lg:py-4">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 lg:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                Criar minha conta
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="*Digite seu nome..."
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="CPF/CNPJ"
                                        id="cpf"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="*Digite seu cpf ou cnpj..."
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="*Digite seu e-mail..."
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Crie uma senha"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        
                                    />
                                </div>

                                <select
                                    id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option selected>
                                        * Selecione sua categoria
                                    </option>
                                    <option value="US">Beleza</option>
                                    <option value="CA">Estética</option>
                                    <option value="FR">Saúde</option>
                                    <option value="DE">Fitness</option>
                                </select>

                                <button
                                    type="submit"
                                    className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Criar conta
                                </button>
                               
                            </form>
                            
                        </div>
                        
                    </div>
                    <p className="text-sm font-light mt-20 text-gray-500 text-center dark:text-gray-400">
                                    <a
                                        href="#"
                                        className="font-medium text-primary-600 hover:underline  text-center dark:text-primary-500"
                                    >
                                        Seu nome e foto serão exibidos para
                                        outros usuário dentro da plataforma. Ao
                                        continuar, você confirma que entende e
                                        concorda com os
                                    </a>
                                </p>
                </div>
            </section>
        </div>
    );
}
