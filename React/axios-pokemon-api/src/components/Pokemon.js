import React, { useState } from 'react';
import axios from 'axios';


export default function Pokemon() {
    const [Pokemons, setPokemons] = useState([]);

    const DisplayPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(Response => {
                return setPokemons(Response.data.results);
            });
            
        }
    


    return (
        <div>
            <button onClick={DisplayPokemon}>Fetch Pokemon</button>
            <ul>
                {Pokemons.map((pokemon, i) => 
                    <li key={i}>{pokemon.name}</li>
                )}
            </ul>
        </div>
    );
}

