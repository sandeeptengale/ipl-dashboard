import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import './TeamPage.scss';
import {PieChart} from 'react-minimal-pie-chart'

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
      <div className='team-name-section'>
        <h1 className='team-name'>{team.teamName}</h1>
        </div>
      <div className='win-loss-section'>
      <PieChart
            data={[
                { title: 'Two', value: team.totalMatches - team.totalWins, color: '#a34d5d' },
                { title: 'One', value: team.totalWins, color: '#4da375' },
            ]}
            />
        </div>
      <div className='match-detail-section'>
        <h3>Latest Match</h3>
        <MatchDetailCard teamName = {team.teamName} match = {team.teamList[0]}/>
      </div>

      {team.teamList.slice(1).map(match => <MatchSmallCard teamName = {team.teamName} match={match}/> )}

      <div className='more-link'>
        <a href="#">More > </a>
      </div>
    </div>
  );
}


