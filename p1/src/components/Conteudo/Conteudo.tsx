import Link from "next/link";

export default function Conteudo() {
    return (
        <div className="menu">
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/paginas/f1">f1</Link></li>
                    <li><Link href="/paginas/f2">f2</Link></li>
                    <li><Link href="/paginas/f3">f3</Link></li>
                </ul>
            </nav>
        </div>
        
    );
}
