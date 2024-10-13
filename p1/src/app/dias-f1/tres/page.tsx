import Conteudo from "@/components/Conteudo/Conteudo";

export default function Dois() {
    return (
        <div className="container">
            <Conteudo />

            <div className="treino">
                <h1>Biceps</h1>
                <h2>Exercicios:</h2>
                <p>Rosca direta com barra – 4 séries de 8-10 repetições</p>
                <p>Rosca martelo com halteres – 3 séries de 10-12 repetições</p>
                <p>Rosca concentrada – 3 séries de 12-15 repetições</p>
            </div>

            <div className="treino">
                <h1>Triceps</h1>
                <h2>Exercicios:</h2>
                <p>Tríceps barra W (polia) – 4 séries de 8-10 repetições</p>
                <p>Tríceps sinuca – 3 séries de 8-10 repetições</p>
                <p>Tríceps máquina – 3 séries de 12-15 repetições</p>
            </div>

            <div className="treino">
                <h1>antebraço</h1>
                <h2>Exercicios:</h2>
                <p>Barra polia</p>
                <p></p>
                <p></p>
            </div>

        </div>
    );
}
