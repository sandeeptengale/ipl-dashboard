import { React } from 'react';

export const MatchSmallCard = ({match}) => {
  return (
    <div className="MatchSmallCard">
      <p>{match.team1} v/s {match.team2}</p>
    </div>
  );
}
