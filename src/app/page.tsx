

import { Button } from "./components/Button";

export default function Home() {
    return (
        <main className="app-main">
            <h1>Olá</h1>
            <Button bgColorHover="var(--bgColor-01)" fontColorHover="var(--fontColor-01)">clique aqui!</Button>
        </main>
    );
}
