import "@/styles/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Ui/Header";
import { PageNameProvider } from "@/context/PageNameContext";
import { SearchBarProvider } from "@/context/SearchContext";
import { Logo } from "@/components/Logo";
import { NavMenu } from "./components/PagesMenu";
import { ScreenProvider } from "@/context/ScreenContext";
import { UserLoginProvider } from "@/context/UserLogin";

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
                        <UserLoginProvider>
                            <Header className="serena-bg-color-01">
                                <Logo type="LogoTipo" />
                                <NavMenu />
                            </Header>
                            <SearchBarProvider>{children}</SearchBarProvider>
                        </UserLoginProvider>
                    </PageNameProvider>
                </body>
            </ScreenProvider>
        </html>
    );
}
