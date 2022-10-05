import { React } from 'react';
import { Link } from 'react-router-dom';

export const MatchSmallCard = ({teamName, match}) => {
    const otherTeam = match.team1 === teamName? match.team2: match.team1;
    const otherTeamRoute = `/team/${otherTeam}`
  return (
    <div className="MatchSmallCard">
      <p> v/s <Link to={otherTeamRoute}>{otherTeam}</Link></p>
      <h3>{match.matchWinner} won by {match.resultMargin} {match.result} </h3>
    </div>
  );
}
