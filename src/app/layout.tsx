import "./globals.css";
import type { Metadata } from "next";
import { ModalProvider } from "./context/ModalContext";

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
        <html lang="pt-br">
            <body className="">
                <ModalProvider>{children}</ModalProvider>
            </body>
        </html>
    );
}
