import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage = () => {
    const [team, setTeam] = useState({teamList: []});
    const { teamName } = useParams();

   useEffect(
        () => {
            const fetchMatches = async() => {
                const response = await fetch(`http://localhost:8080/team/${teamName}`)
                const data = await response.json();
                console.log(data);
                setTeam(data);
            };
            fetchMatches();
        }, [teamName]
    );

    if (!team || !team.teamName) {
        return "<h2>Page not found!<h2/>"
    }

  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailCard teamName = {team.teamName} match = {team.teamList[0]}/>
      {team.teamList.slice(1).map(match => <MatchSmallCard teamName = {team.teamName} match={match}/> )}
    </div>
  );
}


