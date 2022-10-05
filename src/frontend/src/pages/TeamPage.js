import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage = () => {
    const [team, setTeam] = useState({teamList: []});

   useEffect(
        () => {
            const fetchMatches = async() => {
                const response = await fetch('http://localhost:8080/team/Rising%20Pune%20Supergiants')
                const data = await response.json();
                console.log(data);
                setTeam(data);
            };
            fetchMatches();
        }, []
    );

  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailCard match = {team.teamList[0]}/>
      {team.teamList.slice(1).map(match => <MatchSmallCard match={match}/> )}
    </div>
  );
}


