import React from 'react'
import useFetch from "./useFetch"

const Compare = () => {

    const data = useFetch('https://v3.football.api-sports.io/teams/statistics?league=140&season=2020&team=529')

    console.log(data)
    return (
        <div>
            
        </div>
    )
}

export default Compare