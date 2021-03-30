import React from 'react';
import useFetch from '../useFetch';
require('dotenv').config();

const Teams = () => {
    const res = useFetch('https://v3.football.api-sports.io/teams?country=spain') || [];

    const results = res.response;
    console.log(results);
    results &&
        results.forEach((e) => {
            console.log(e.team);
        });

    return (
        <div>
            {results &&
                results.map((e) => (
                    <ul>
                        <img src={e.team.logo} alt="logo" />
                        <li>País: {e.team.country}</li>
                        <li>Nombre del equipo: {e.team.name}</li>
                        <li>Fundado: {e.team.founded}</li>
                    </ul>
                ))}
        </div>
    );
};

export default Teams;
