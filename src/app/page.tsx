"use client";

import "@/app/styles/home_styles.css";

import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { SerenaLogo } from "./components/SerenaLogo";
import { CirclePlusIcon } from "./modules/app.modules";
import { Tooltip } from "./components/Tooltip";

import Image from "next/image";
import home_banner_01 from "@/app/assets/images/home_banner_01.svg";
import serena_asset_4 from "@/app/assets/images/serena_asset_4.svg";

import { ModalCreateAccount } from "./components/Modals/ModalCreateAccount";
import { useModalContext } from "./hooks/useModalContext";
import { ModalLoginAccount } from "./components/Modals/ModalLoginAccount";
import { useOpenModal } from "./hooks/useOpenModal";

export default function Home() {

    const { openModal } = useModalContext();
    const { state, dispatch } = useOpenModal();

    function openLocalModal(modalType: string) {
        openModal();
        dispatch({
            type: modalType
        });
    }

    return (
        <div>
            <Header colorFill="var(--bg-color-02)">
                <div className="home-header__content">
                    <SerenaLogo />
                    <ul className="buttons-list">
                        <li>
                            <Button
                                bgColorHover="var(--bg-color-01)"
                                fontColorHover="var(--font-color-01)"
                            >
                                Sobre
                            </Button>
                        </li>
                        <li>
                            <Button
                                bgColorHover="var(--bg-color-01)"
                                fontColorHover="var(--font-color-01)"
                            >
                                Recursos
                            </Button>
                        </li>
                        <li>
                            <Button
                                bgColorHover="var(--bg-color-01)"
                                fontColorHover="var(--font-color-01)"
                            >
                                Preços
                            </Button>
                        </li>

                        <li>
                            <Tooltip msg="Mais informações">
                                <Button bgColorHover="var(--bg-color-01)">
                                    <CirclePlusIcon
                                        color="var(--font-color-01)"
                                        size={20}
                                    />
                                </Button>
                            </Tooltip>
                        </li>
                    </ul>
                </div>

                <ul className="buttons-list">
                    <li>
                        <Button bgColor="var(--bg-color-01)">Entrar</Button>
                    </li>
                    <li>
                        <Button border={true} bgColor="var(--bg-color-01)">
                            Criar conta
                        </Button>
                    </li>
                </ul>
            </Header>

            <ModalCreateAccount view={state?.modal_1}>
                <button className="app-button" onClick={() => openLocalModal('MODAL_LOGIN')}>
                    Clique aqui 1
                </button>
            </ModalCreateAccount>

            <ModalLoginAccount view={state?.modal_2}>
                <button className="app-button" onClick={() => openLocalModal('MODAL_SIGN_UP')}>
                    Clique aqui 2
                </button>
            </ModalLoginAccount>



            {/*          <ModalLoginAccount modalView={modal_2}>
                <button className="app-button" onClick={open02}>
                    Clique aqui 2
                </button>
            </ModalLoginAccount> */}

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

                        <div className="home-content-03__text-container">
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

                            <Button className="home-content-03__button">
                                Criar conta
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
