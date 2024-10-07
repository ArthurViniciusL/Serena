import "@/styles/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Ui/Header";
import { PageNameProvider } from "@/context/PageNameContext";
import { SearchBarProvider } from "@/context/SearchContext";
import { ButtonsList } from "./components/ButtonsList";
import { Logo } from "@/components/Logo";
export const metadata: Metadata = {
    title: "Serena",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" className="">
            <body className="serena-bg-color">
                <PageNameProvider>
                    <Header>
                        <Logo type="LogoTipo"/>
                        <ButtonsList />
                    </Header>
                    <SearchBarProvider>{children}</SearchBarProvider>
                </PageNameProvider>
            </body>
        </html>
    );
}
