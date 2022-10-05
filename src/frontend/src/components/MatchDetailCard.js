import { React } from 'react';
import { Link } from 'react-router-dom';

export const MatchDetailCard = ({teamName, match}) => {
    if (!match) return null;
    const otherTeam = match.team1 === teamName? match.team2: match.team1;
    const otherTeamRoute = `/team/${otherTeam}`
  return (
    <div className="MatchDetailCard">
      <h1>Latest Match</h1>

      <h1> v/s <Link to={otherTeamRoute}>{otherTeam}</Link></h1>
      <h2>{match.date}</h2>
      <h2>at {match.venue}</h2>
      <h3>{match.matchWinner} won by {match.resultMargin} {match.result} </h3>
    </div>
  );
}
