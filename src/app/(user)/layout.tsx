import "@/styles/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Ui/Header";
import { PageNameProvider } from "@/context/PageNameContext";
import { SearchBarProvider } from "@/context/SearchContext";
import { Logo } from "@/components/Logo";
import { PagesMenu } from "./components/PagesMenu";
import { Menu } from "@/components/Ui/Menu";
import { ScreenProvider } from "@/context/ScreenContext";
export const metadata: Metadata = {
    title: "Serena",
    description: "Generated by create next app",
};

export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" className="">
            <ScreenProvider>
                <body className="">
                    <PageNameProvider>
                        <Header className="serena-bg-color-01">
                            <Logo type="LogoTipo" />
                            
                                <span></span>
                                <PagesMenu />
                           {/*  </Menu> */}
                        </Header>
                        <SearchBarProvider>{children}</SearchBarProvider>
                    </PageNameProvider>
                </body>
            </ScreenProvider>
        </html>
    );
}
