import Link from "next/link";

export default function Page() {
    return (
        <>
            <h1>Pokedex</h1>
            <p>Que souhaitez vous faire ?</p>
            <Link href={`/pokemons`}>Consulter les pokemons</Link>
        </>
    );
}
