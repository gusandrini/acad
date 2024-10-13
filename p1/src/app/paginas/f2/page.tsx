import Link from "next/link";

export default function f2() {
    return (
        <div className="container">
            <div className="opcoes-rotas">
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/paginas/f1">f1</Link></li>
                        <li><Link href="/paginas/f2">f2</Link></li>
                        <li><Link href="/paginas/f3">f3</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="treinos">
                <div className="d1">
                    <p>dia 1</p>
                </div>

                <div className="d2">
                    <p>dia 2</p>
                </div>

                <div className="d3">
                    <p>dia 3</p>
                </div>

                <div className="d4">
                    <p>dia 4</p>
                </div>

                <div className="d5">
                    <p>dia 5</p>
                </div>

            </div>
            <h1>ficha 2</h1>

        </div>
    );
}
