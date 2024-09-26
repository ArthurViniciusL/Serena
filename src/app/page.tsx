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
import { ButtonsList } from "./pages/home/components/ButtonsList";

export default function Home() {
    return (
        <div>
            <Header colorFill="var(--bg-color-02)">
                <div className="home-header__content">
                    <a href={routes.Home}>
                        <LogoMarca />
                    </a>
                    <ButtonsList />
                </div>

                <ul className="home-buttons__list">
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

            <main className="app-main">
                <section className="app-section home-section home-content__section-01">
                    <div className="home-content-01__intro">
                        <p className="home-content-01__msg">Olá, eu sou a</p>
                        <div className="home-content__name-container">
                            <p className="home-content__name">Serena</p>
                            <p className="home-content__emoji">👋</p>
                        </div>
                        <p className="home-content-01__msg">
                            a nova parceira do seu negócio!
                        </p>
                    </div>
                </section>

                <section className="app-section home-section home-content__section-02">
                    <div className="home-content-02__intro">
                        <div className="home-content-02__text-container">
                            <p className="home-content-02__msg">
                                Simplifique seus agendamentos com a{" "}
                                <span className="serena-style-font">
                                    Serena
                                </span>{" "}
                                e tenha controle total de horários.
                            </p>
                            <p className="home-content-02__msg">
                                A{" "}
                                <span className="serena-style-font">
                                    Serena
                                </span>{" "}
                                oferece um sistema intuitivo e eficiente para
                                que você possa organizar seus compromissos e se
                                concentrar no que realmente importa: atender bem
                                seus clientes.
                            </p>
                        </div>
                        <div className="home-content-02__img-container">
                            <Image
                                src={home_banner_01}
                                width={500}
                                height={500}
                                alt="home_banner_01"
                                priority={true}
                            />
                        </div>
                    </div>
                </section>

                <section className="app-section home-section home-content__section-03">
                    <div className="home-content-03__intro">
                        <div className="home-content-03__img-container">
                            <Image
                                src={serena_asset_4}
                                width={500}
                                height={500}
                                alt=""
                                priority={true}
                            />
                        </div>

                        <div className="home-content-03__text-container"> {/*  */}
                            <p className="home-content-03__msg">
                                <span className="serena-style-font">
                                    Serena{" "}
                                </span>
                                foi desenvolvido para prestadores de serviços
                                que buscam otimizar o controle de suas agendas e
                                melhorar a comunicação com os clientes. Com a
                                Serena, você agenda compromissos com facilidade,
                                gerencia horários, e recebe relatórios
                                detalhados sobre seus atendimentos, tudo em uma
                                única plataforma.
                            </p>

                            <ModalCreateAccount>
                                <Button className="app-button-large">
                                    Criar conta
                                </Button>
                            </ModalCreateAccount>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
