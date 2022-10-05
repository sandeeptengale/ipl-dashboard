import { React } from 'react';

export const MatchDetailCard = ({match}) => {
    if (!match) return null;
  return (
    <div className="MatchDetailCard">
      <h1>Latest Match</h1>
      <h3>Match Details</h3>
      <h4>{match.team1} v/s {match.team2}</h4>
    </div>
  );
}
