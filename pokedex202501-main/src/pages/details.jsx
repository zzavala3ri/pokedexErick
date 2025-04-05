import { useParams } from "react-router";

import { Loading } from "../components/Loading";
import { usePokemonDetail } from '../services/pockemonapi';
import { PokemonAddCollection } from "../components/Pokemon/PokemonAddCollection";

export const Details = () => {
    const { pokeid } = useParams();
    const pokemonData = usePokemonDetail(pokeid);

    if (!pokemonData) {
        return (
            <Loading />
        );
    }

    return (
        <section className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 capitalize">
                {pokemonData.name}
            </h1>
            <section className="flex justify-center gap-4 mb-6">
                <img
                    className="w-40 h-40 object-contain rounded-lg shadow-md"
                    src={pokemonData.sprites.front_default}
                    alt={`${pokemonData.name} front`}
                />
                <img
                    className="w-40 h-40 object-contain rounded-lg shadow-md"
                    src={pokemonData.sprites.back_default}
                    alt={`${pokemonData.name} back`}
                />
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Type(s)</h2>
                <ul className="flex gap-2">
                    {pokemonData.types.map((typeInfo, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md capitalize"
                        >
                            {typeInfo.type.name}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Abilities</h2>
                <ul className="list-disc list-inside">
                    {pokemonData.abilities.map((abilityInfo, index) => (
                        <li key={index} className="text-gray-600 capitalize">
                            {abilityInfo.ability.name}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Base Stats</h2>
                <ul className="grid grid-cols-2 gap-4">
                    {pokemonData.stats.map((statInfo, index) => (
                        <li
                            key={index}
                            className="p-4 bg-gray-200 rounded-lg shadow-md text-gray-700 capitalize"
                        >
                            <span className="font-bold">{statInfo.stat.name}:</span> {statInfo.base_stat}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="mt-6">
                <PokemonAddCollection
                    Pokecod={pokeid}
                    imgSprite={pokemonData.sprites.front_default}
                    name={pokemonData.name}
                    url=''
                />
            </section>
        </section>
    );
};
