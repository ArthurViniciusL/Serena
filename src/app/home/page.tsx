"use client";

import style from "./styles/Home.module.css";
import { Logo } from "@/components/Logo";
import { Menu } from "./components/Menu";
import { Button } from "@/components/Button";
import { Header } from "@/components/Ui/Header";

import Image from "next/image";
import home_banner_01 from "@/assets/images/home_banner_01.svg";
import serena_asset_4 from "@/assets/images/serena_asset_4.svg";

import { ModalCreateAccount } from "@/components/Modals/ModalCreateAccount";
import { Test } from "@/components/Teste";

export default function Home() {
    return (
        <>
            <Header className="serena-bg-color-02">
                <Logo type="LogoTipo" />
                <Menu />
            </Header>

            <main className="">
                <section className={style.content}>
                    <div className={style.boxColumn}>
                        <p className={style.sec01_msg}>Olá, eu sou a</p>
                        <h2 className={`serena-ft-red-02 ${style.name}`}>
                            Serena <span className={style.emoji}>👋</span>
                        </h2>

                        <p className={style.sec01_msg}>
                            a nova parceira do seu negócio!
                        </p>
                    </div>
                </section>

                <section className={style.content}>
                    <div className={style.boxRow}>
                        <div className={style.wrapperText}>
                            <p>
                                Simplifique seus agendamentos com a <span className="serena-ft-red-02 font-semibold">Serena</span> e tenha controle total de horários.
                            </p>
                            <p>
                                A <span className="serena-ft-red-02 font-semibold">Serena</span> oferece um sistema intuitivo e eficiente para que você possa organizar seus compromissos e se concentrar no que realmente importa: atender bem seus clientes.
                            </p>
                        </div>
                        <Image
                            id={style.img}
                            src={home_banner_01}
                            width={500}
                            height={500}
                            alt="home_banner_01"
                            priority={true}
                        />
                    </div>
                </section>

                <section className={style.content}>
                    <div className={style.boxRow}>
                        <Image
                            id={style.img}
                            src={serena_asset_4}
                            width={400}
                            height={400}
                            alt="maco serena"
                            priority={true}
                        />

                        <div className={style.wrapperText}>
                            <p> <span className="serena-ft-red-02 font-semibold">Serena</span> foi desenvolvido para prestadores de serviços que buscam otimizar o controle de suas agendas e melhorar a comunicação com os clientes. Com a <span className="serena-ft-red-02 font-semibold">Serena</span>, você agenda compromissos com facilidade, gerencia horários, e recebe relatórios detalhados sobre seus atendimentos, tudo em uma única plataforma.
                            </p>
                            <ModalCreateAccount>
                                <Button className="serena-btn-large">
                                    Criar conta
                                </Button>
                            </ModalCreateAccount>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
