import Image from "next/image";

export default function Rodape() {
    return (
        <div className="rodape">

            <Image 
                src="/app/image/ronnie-coleman-rei.webp" // Caminho da imagem na pasta public
                alt="Ronnie Coleman"
                width={500} // Largura da imagem
                height={300} // Altura da imagem
                quality={100} // Qualidade da imagem (opcional)
            />

        </div>
    );
}
