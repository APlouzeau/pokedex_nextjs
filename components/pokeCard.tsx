import Image from "next/image";

export default function Pokecards() {
    return (
        <div>
            <h2>Carte du pokemon</h2>
            <p>Informations sur le pokemon</p>
            <p>Id du pokemon</p>
            <p>Nom du pokemon</p>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
        </div>
    );
}
