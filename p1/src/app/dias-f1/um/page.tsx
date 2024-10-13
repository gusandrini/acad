import Conteudo from "@/components/Conteudo/Conteudo";

export default function Um() {
    return (
        <div className="container">
            <Conteudo />

            <div className="treino">
                <h1>Peito</h1>
                <h2>Exercicios:</h2>
                <p>Supino reto máquina</p>
                <p>Supino inclinado halter</p>
                <p>Supino reto cross over</p>
                <p>Supino declinado máquina</p>
            </div>

            <div className="treino">
                <h1>Ombro</h1>
                <h2>Exercicios:</h2>
                <p>Elevação lateral halter</p>
                <p>Desenvolvimento militar</p>
                <p>Elevação frontal</p>
            </div>

        </div>
    );
}
