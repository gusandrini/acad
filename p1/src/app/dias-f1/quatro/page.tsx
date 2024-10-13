import Conteudo from "@/components/Conteudo/Conteudo";

export default function Quatro() {
    return (
        <div className="container">

            <Conteudo />

            <div className="treino">
                <h1>Costas</h1>
                <h2>Exercicios:</h2>
                <p>Pulley frente com pegada aberta</p>
                <p>Puxada alta invertida articulada</p>
                <p>Remada curvada com barra</p>
                <p>Pullover com corda</p>
                <p>Remada unilateral com halteres</p>
                
            </div>

            <div className="treino">
                <h1>Ombro</h1>
                <h2>Exercicios:</h2>
                <p>Desenvolvimento militar "girando"</p>
                <p>Posterior de ombro halter</p>
                <p>Posterior de ombro máquina</p>
            </div>

        </div>
    );
}
