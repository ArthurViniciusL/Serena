import "@/app/globals.css";
import type { Metadata } from "next";
import { Header } from "../components/Header";
import { LogoTipo } from "../components/SerenaLogos/LogoTipo";
import { Button } from "../components/Button";

export const metadata: Metadata = {
    title: "Serena | {}",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className="app-bg-color">
                <Header colorFill="var(--bg-color-01)">
                    <LogoTipo />
                    <Button>
                        Teste
                    </Button>
                </Header>
                {children}
            </body>
        </html>
    );
}