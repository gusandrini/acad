import Conteudo from "@/components/Conteudo/Conteudo";
import Link from "next/link";


export default function f1() {
    return (
        <div className="container">
            <Conteudo/>

            <div className="treinos">
                <div className="d1">
                    <nav>
                        <ul>
                            <li><Link href="/dias-f1/um">dia 1</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="d2">
                    <nav>
                        <ul>
                            <li><Link href="/dias-f1/dois">dia 2</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="d3">
                    <nav>
                        <ul>
                            <li><Link href="/dias-f1/tres">dia 3</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="d4">
                    <nav>
                        <ul>
                            <li><Link href="/dias-f1/quatro">dia 4</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="d5">
                    <nav>
                        <ul>
                            <li><Link href="/dias-f1/cinco">dia 5</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
            <h1>ficha 1</h1>
        </div>
    );
}
